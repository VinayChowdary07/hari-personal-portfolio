
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => Promise<void>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for your message! I'll get back to you soon. You should also receive a confirmation email.",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly at vinayjustin322@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              placeholder="Your full name"
              className={`pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 ${
                errors.name ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="your.email@example.com"
              className={`pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 ${
                errors.email ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange('subject')}
            placeholder="What's this about?"
            className={`pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 ${
              errors.subject ? 'border-red-500' : ''
            }`}
            disabled={isSubmitting}
          />
        </div>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange('message')}
            placeholder="Tell me about your project or idea..."
            rows={6}
            className={`pl-10 bg-background/50 border-primary/20 focus:border-primary transition-all duration-300 ${
              errors.message ? 'border-red-500' : ''
            }`}
            disabled={isSubmitting}
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      
      <Button 
        type="submit" 
        className="w-full gradient-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;

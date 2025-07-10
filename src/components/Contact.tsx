
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or job opportunity. I'm always excited to work on new challenges!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up w-full">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full neon-glow bg-primary hover:bg-primary/80"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-slide-up w-full" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6 lg:space-y-8 h-full flex flex-col">
              <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Let's Connect</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development.
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">vinayjustin322@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="text-primary" size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">GitHub</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">https://www.github.com/VinayChowdary07</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-primary" size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">LinkedIn</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">https://www.linkedin.com/in/saranvinay</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Download Resume</h4>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-sm sm:text-base neon-glow"
                  asChild
                >
                  <a href="/Hari_Koppineedi.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

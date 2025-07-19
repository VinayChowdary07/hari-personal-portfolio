
import ContactForm, { ContactFormData } from '@/components/ContactForm';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendContactEmail } from '@/services/emailService';

const Contact = () => {
  const handleFormSubmit = async (formData: ContactFormData) => {
    await sendContactEmail(formData);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or job opportunity. I'm always excited to work on new challenges!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up w-full">
            <div className="contact-card h-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Send Me a Message</h3>
              <ContactForm onSubmit={handleFormSubmit} />
              
              {/* Social Icons Row */}
              <div className="border-t border-border/50 pt-6 mt-6">
                <p className="text-sm text-muted-foreground mb-4 text-center">Or connect with me on</p>
                <div className="flex justify-center space-x-6">
                  <a href="https://github.com/VinayChowdary07" target="_blank" rel="noopener noreferrer" 
                     className="social-icon">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/saranvinay" target="_blank" rel="noopener noreferrer" 
                     className="social-icon">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:vinayjustin322@gmail.com" 
                     className="social-icon">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-slide-up w-full" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6 lg:space-y-6 h-full flex flex-col">
              <div className="contact-card flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Let's Connect</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development.
                </p>
                
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">vinayjustin322@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Github className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">GitHub</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">github.com/VinayChowdary07</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <Linkedin className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base">LinkedIn</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">linkedin.com/in/saranvinay</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-card">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Download Resume</h4>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button 
                  className="w-full gradient-button text-sm sm:text-base"
                  asChild
                >
                  <a href="/HariSaranKoppineedi.pdf" download>
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

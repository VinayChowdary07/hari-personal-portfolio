
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleResumeDownload = () => {
    // Open the resume PDF in a new tab
    window.open('/HariSaranKoppineedi.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 mx-auto w-48 h-48 rounded-full overflow-hidden glass-effect p-2 animate-float">
            <img alt="Hari Koppineedi" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/846032b4-a201-490e-8040-52a66cf67d68.jpg" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Hari Koppineedi</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative web applications and bringing ideas to life through code.
            Specialized in modern technologies and user-centered design.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-md sm:max-w-none mx-auto">
            <Button onClick={() => scrollToSection('about')} className="neon-glow bg-primary hover:bg-primary/80 w-full sm:w-auto">
              About Me
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              onClick={handleResumeDownload}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/VinayChowdary07" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/saranvinay" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vinayjustin322@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

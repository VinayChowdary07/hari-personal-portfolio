import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 mx-auto w-48 h-48 rounded-full overflow-hidden glass-effect p-2 animate-float">
          <img alt="Your Name" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/846032b4-a201-490e-8040-52a66cf67d68.jpg" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">Hari Koppineedi</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full Stack Developer
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about creating innovative web applications and bringing ideas to life through code.
          Specialized in modern technologies and user-centered design.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Button onClick={() => scrollToSection('projects')} className="neon-glow bg-primary hover:bg-primary/80">
            View My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Me
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
  </section>;
};
export default Hero;

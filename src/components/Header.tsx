import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">Hari Koppineedi</div>
        
        <div className="hidden md:flex space-x-8">
          {['about', 'skills', 'projects', 'education', 'blog', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-foreground hover:text-primary transition-colors duration-300 capitalize">
              {item}
            </button>)}
        </div>
        
        <Button onClick={() => scrollToSection('contact')} className="neon-glow bg-primary hover:bg-primary/80">
          Hire Me
        </Button>
      </nav>
    </header>;
};
export default Header;
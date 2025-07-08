
const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 Hari Koppineedi. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Designed & Developed with <span className="text-primary">♥</span> by Hari Koppineedi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

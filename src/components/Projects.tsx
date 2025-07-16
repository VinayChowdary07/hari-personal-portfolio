
import { Button } from '@/components/ui/button';
import { Github, Database, BarChart3, Shield, Code2 } from 'lucide-react';

const Projects = () => {
  const getTechIcon = (tech: string) => {
    const iconProps = { size: 16, className: "text-primary" };
    
    switch (tech.toLowerCase()) {
      case 'python':
        return <Code2 {...iconProps} />;
      case 'django':
        return <Database {...iconProps} />;
      case 'chart.js':
        return <BarChart3 {...iconProps} />;
      case 'md5':
        return <Shield {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  const projects = [
    {
      title: "Crime Prediction Dashboard",
      description: "Predictive analytics tool using Django to forecast crime trends with real data and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "Chart.js", "Analytics"],
      githubUrl: "https://github.com/VinayChowdary07/Crime-Prediction-Project.git"
    },
    {
      title: "Contact Manager",
      description: "Full-stack contact management system with MD5-authenticated login, CRUD API, and data visualizations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Full-stack", "MD5", "CRUD API", "Visualizations"],
      githubUrl: "https://github.com/VinayChowdary07/Hackveda-Contact-Book.git"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-effect rounded-2xl overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gradient">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

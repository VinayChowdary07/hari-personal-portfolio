
import { Button } from '@/components/ui/button';
import { Github, Database, BarChart3, Shield, Code2, ExternalLink, Calendar, Users, Zap, Globe, Palette } from 'lucide-react';

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
      case 'react':
        return <Code2 {...iconProps} />;
      case 'tailwind css':
        return <Palette {...iconProps} />;
      case 'supabase':
        return <Database {...iconProps} />;
      case 'vite':
        return <Zap {...iconProps} />;
      case 'google apis':
        return <Calendar {...iconProps} />;
      case 'react context':
        return <Users {...iconProps} />;
      case 'lovable ai':
        return <Code2 {...iconProps} />;
      case 'github':
        return <Github {...iconProps} />;
      case 'netlify/vercel':
        return <Globe {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A fully responsive, modern portfolio website built to showcase my projects, skills, and professional journey. Designed for clean navigation and engaging user experience, it features dark mode, dynamic project sections, contact forms, and a sleek, minimal UI aligned with my personal brand.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Lovable AI", "GitHub"],
      githubUrl: "https://github.com/VinayChowdary07/hari-personal-portfolio",
      liveUrl: "https://hari-personal-portfolio.lovable.app"
    },
    {
      title: "HyperTask — Advanced Productivity Task Manager",
      description: "HyperTask is a modern, full-featured task management web app built for individuals and teams. It includes smart scheduling, recurring tasks, progress tracking, goal setting, and an elegant, dark-mode UI.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Supabase", "Google APIs", "Analytics"],
      githubUrl: "https://github.com/VinayChowdary07/tactix-task-manager.git",
      liveUrl: "https://tactix-task-manager.lovable.app"
    },
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
      technologies: ["Python", "MD5", "CRUD API", "Flask", "MySQL"],
      githubUrl: "https://github.com/VinayChowdary07/Contact-Manager.git"
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
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-effect rounded-2xl overflow-hidden group animate-slide-up h-full flex flex-col"
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
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gradient">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                  
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
                  
                  <div className="flex gap-3 justify-center mt-auto">
                    {project.liveUrl && (
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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
      </div>
    </section>
  );
};

export default Projects;

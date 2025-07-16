
import { useState, useEffect } from 'react';
import { Code, Layers, Database, Server, Wrench, Smartphone, Globe, Cloud, GitBranch, Package } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const getSkillIcon = (skillName: string) => {
    const iconProps = { size: 16, className: "text-primary flex-shrink-0" };
    
    switch (skillName.toLowerCase()) {
      case 'react':
        return <Code {...iconProps} />;
      case 'bootstrap':
        return <Layers {...iconProps} />;
      case 'next.js':
        return <Smartphone {...iconProps} />;
      case 'tailwind css':
        return <Layers {...iconProps} />;
      case 'javascript':
        return <Code {...iconProps} />;
      case 'node.js':
        return <Server {...iconProps} />;
      case 'flask':
        return <Server {...iconProps} />;
      case 'python':
        return <Code {...iconProps} />;
      case 'mysql':
        return <Database {...iconProps} />;
      case 'sqlite':
        return <Database {...iconProps} />;
      case 'git':
        return <GitBranch {...iconProps} />;
      case 'docker':
        return <Package {...iconProps} />;
      case 'aws':
        return <Cloud {...iconProps} />;
      case 'rest apis':
        return <Globe {...iconProps} />;
      case 'postman':
        return <Wrench {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Bootstrap", "Next.js", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Flask", "Python", "MySQL", "SQLite"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "REST APIs", "Postman"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-effect rounded-2xl p-6 sm:p-8 animate-slide-up w-full"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-accent drop-shadow-glow text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/20 transition-colors duration-200"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                    }}
                  >
                    {getSkillIcon(skill)}
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

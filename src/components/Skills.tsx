
import { useState, useEffect } from 'react';
import { Code, Layers, Database, Server, Wrench, Smartphone, Globe, Cloud, GitBranch, Package } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const getSkillIcon = (skillName: string) => {
    const iconProps = { size: 18, className: "text-primary" };
    
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
      skills: [
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "SQlite", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Postman", level: 75 }
      ]
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-effect rounded-2xl p-4 sm:p-6 animate-slide-up w-full max-w-full"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.name)}
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
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

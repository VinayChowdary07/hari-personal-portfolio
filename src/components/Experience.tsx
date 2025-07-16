
const Experience = () => {
  const experience = [
    {
      company: "Hackveda Limited",
      position: "Full-Stack Web Developer Intern",
      duration: "Jan 2024 – May 2024",
      description: "Contributed to building a real-world medical appointment booking platform using Flask and MySQL.",
      achievements: [
        "Designed and improved backend data models and APIs to keep the system fast and reliable",
        "Integrated user-friendly features and real-time validations for smoother booking experience",
        "Collaborated in a distributed team environment, using GitHub for version control and continuous integration"
      ],
      technologies: ["Python", "Flask", "MySQL", "GitHub", "HTML", "CSS", "Bootstrap", "API Handling"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the real-world projects I've contributed to
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 animate-slide-up"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gradient mb-2">{exp.position}</h3>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/20 px-4 py-2 rounded-full mt-4 lg:mt-0 lg:ml-6 flex-shrink-0 self-start">
                  {exp.duration}
                </span>
              </div>
              
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-primary mb-4">Key Contributions:</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-primary mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium border border-accent/20 hover:border-accent/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

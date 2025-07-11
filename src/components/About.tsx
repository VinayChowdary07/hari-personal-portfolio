
const About = () => {
  const timelineItems = [
    {
      title: "Education",
      description: "Computer Science Graduate",
      icon: "🎓"
    },
    {
      title: "Coding Journey",
      description: "Discovered passion for development",
      icon: "💻"
    },
    {
      title: "Projects",
      description: "Built full-stack applications",
      icon: "🚀"
    },
    {
      title: "Current Focus",
      description: "Seeking Full Stack Developer roles",
      icon: "🎯"
    }
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch max-w-6xl mx-auto">
          <div className="animate-slide-up w-full">
            <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full h-full bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-sm border border-border/50">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-bold text-foreground">passionate Full Stack Developer</span> with a strong foundation in both front-end and back-end technologies. 
                My journey in <span className="text-primary font-semibold">software development</span> started during my college years, where I discovered my love for creating 
                <span className="font-bold text-foreground"> digital solutions</span> that make a real impact.
              </p>
              <p className="text-muted-foreground mb-4">
                I enjoy working on <span className="text-primary font-semibold">challenging projects</span> that push the boundaries of what's possible with modern web technologies. 
                My approach combines <span className="font-bold text-foreground">technical expertise</span> with creative problem-solving to deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring <span className="text-primary font-semibold">new technologies</span>, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>

              {/* Timeline */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">My Journey</h4>
                <div className="space-y-3">
                  {timelineItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="flex-shrink-0 w-4 h-px bg-border"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up w-full" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full h-full bg-gradient-to-br from-card/80 via-card to-card/60 backdrop-blur-sm border border-border/50 flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">Quick Facts</h4>
              <div className="grid gap-3 sm:gap-4 flex-1">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🎓</span>
                  <span className="text-muted-foreground">Computer Science Graduate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">💼</span>
                  <span className="text-muted-foreground">Open to Full Stack Developer roles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🌍</span>
                  <span className="text-muted-foreground">Based in Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🚀</span>
                  <span className="text-muted-foreground">Passionate about modern web technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📚</span>
                  <span className="text-muted-foreground">Continuous learner and tech enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

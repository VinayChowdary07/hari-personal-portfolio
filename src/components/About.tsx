
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
    <section id="about" className="py-16 sm:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>
        
        {/* Main Content Card */}
        <div className="animate-slide-up mb-8">
          <div className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-border/20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gradient">My Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="font-bold text-foreground">passionate Full Stack Developer</span> with a strong foundation in both front-end and back-end technologies. 
                My journey in <span className="text-primary font-semibold">software development</span> started during my college years, where I discovered my love for creating 
                <span className="font-bold text-foreground"> digital solutions</span> that make a real impact.
              </p>
              <p>
                I enjoy working on <span className="text-primary font-semibold">challenging projects</span> that push the boundaries of what's possible with modern web technologies. 
                My approach combines <span className="font-bold text-foreground">technical expertise</span> with creative problem-solving to deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring <span className="text-primary font-semibold">new technologies</span>, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 sm:mt-10">
              <h4 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide">My Journey</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {timelineItems.map((item, index) => (
                  <div key={index} className="bg-card/50 rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h5 className="font-semibold text-foreground mb-2">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Facts */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-border/20">
            <h4 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient text-center">Quick Facts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl border border-border/20">
                <span className="text-2xl">🎓</span>
                <span className="text-muted-foreground">Computer Science Graduate</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl border border-border/20">
                <span className="text-2xl">💼</span>
                <span className="text-muted-foreground">Open to Full Stack Developer roles</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl border border-border/20">
                <span className="text-2xl">🌍</span>
                <span className="text-muted-foreground">Based in Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl border border-border/20">
                <span className="text-2xl">🚀</span>
                <span className="text-muted-foreground">Passionate about modern web technologies</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-card/30 rounded-xl border border-border/20">
                <span className="text-2xl">📚</span>
                <span className="text-muted-foreground">Continuous learner and tech enthusiast</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;


const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                My journey in software development started during my college years, where I discovered my love for creating 
                digital solutions that make a real impact.
              </p>
              <p className="text-muted-foreground mb-4">
                I enjoy working on challenging projects that push the boundaries of what's possible with modern web technologies. 
                My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3 text-primary">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 Open to Full Stack Developer roles</li>
                <li>🌍 Based in Your City, Country</li>
                <li>🚀 Passionate about modern web technologies</li>
                <li>📚 Continuous learner and tech enthusiast</li>
              </ul>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3 text-primary">Values</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✨ Clean, maintainable code</li>
                <li>🎯 User-centered design approach</li>
                <li>🤝 Collaborative team spirit</li>
                <li>📈 Continuous improvement mindset</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


const About = () => {
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
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="animate-slide-up w-full">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-full">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-gradient">My Story</h3>
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
          
          <div className="space-y-4 sm:space-y-6 animate-slide-up w-full">
            <div className="glass-effect rounded-2xl p-4 sm:p-6 w-full max-w-full">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 Open to Full Stack Developer roles</li>
                <li>🌍 Based in Hyderbabad, India</li>
                <li>🚀 Passionate about modern web technologies</li>
                <li>📚 Continuous learner and tech enthusiast</li>
              </ul>
            </div>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

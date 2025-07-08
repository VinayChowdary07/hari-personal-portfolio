
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "The ICFAI University Raipur",
      duration: "2020 - 2024",
      grade: "CGPA: 8.62/10",
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Led final year project",
        "Active member of Computer Science Society"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Sasi Junior College",
      duration: "2018 - 2020",
      grade: "CGPA: 9.28/10",
      achievements: [
        "School topper in Computer Science",
        "Mathematics Olympiad participant",
        "Head of Programming Club"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Full Stack Web Development",
    "Git and Github"
  ];

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gradient">{edu.degree}</h4>
                      <p className="text-foreground font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-primary/20 px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <p className="text-primary font-semibold mb-3">{edu.grade}</p>
                  
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Certifications</h3>
            <div className="glass-effect rounded-2xl p-6">
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center p-4 bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 glass-effect rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-gradient">Currently Learning</h4>
              <div className="flex flex-wrap gap-3">
                {[ "Articifiial Intelligence", "Machine Learning", "DevOps"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

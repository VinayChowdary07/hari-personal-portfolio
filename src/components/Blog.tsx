
const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable React applications that can grow with your business needs.",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Exploring advanced CSS features like Grid, Flexbox, and custom properties to create stunning user interfaces.",
      date: "Nov 28, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["CSS", "UI/UX", "Frontend"]
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Tips and techniques to optimize your Node.js applications for better performance and scalability.",
      date: "Nov 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      tags: ["Node.js", "Performance", "Backend"]
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer animate-slide-up hover:neon-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-filter backdrop-blur-md text-primary px-2 py-1 rounded text-sm">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gradient group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="text-primary group-hover:underline">Read more →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-medium transition-colors">
            View All Posts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

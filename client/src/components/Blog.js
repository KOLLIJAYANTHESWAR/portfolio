import "./Blog.css"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Netflix Scales on the Cloud: A Real-World AWS Architecture Breakdown",
      excerpt: "Understanding the architecture behind one of the world's largest streaming platforms...",
      date: "Coming Soon",
      readTime: "15 min read",
      category: "Architecture",
    },
    {
      id: 2,
      title: "Journey of a Cloud Provider: From One Server to Global Scale",
      excerpt: "Exploring how cloud providers evolved from simple server management to global infrastructure...",
      date: "Coming Soon",
      readTime: "18 min read",
      category: "Cloud Systems",
    },
    {
      id: 3,
      title: "How AWS Manages Millions of Requests Every Second",
      excerpt: "Deep dive into the systems, protocols, and architecture that power massive-scale systems...",
      date: "Coming Soon",
      readTime: "20 min read",
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "What It Takes to Design Cloud-Native Systems",
      excerpt: "Essential principles and patterns for building modern, scalable cloud applications...",
      date: "Coming Soon",
      readTime: "16 min read",
      category: "System Design",
    },
    {
      id: 5,
      title: "Kubernetes in Production: Real-world deployment patterns and best practices",
      excerpt: "Proven strategies for running Kubernetes in production environments at scale...",
      date: "Coming Soon",
      readTime: "17 min read",
      category: "DevOps",
    },
    {
      id: 6,
      title: "Building Resilient Systems: Fault tolerance and disaster recovery",
      excerpt: "Designing systems that gracefully handle failures and recover quickly...",
      date: "Coming Soon",
      readTime: "19 min read",
      category: "Reliability",
    },
  ]

  const displayedBlogs = blogPosts.slice(0, 6)
  const hasMoreBlogs = blogPosts.length > 6

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="section-title">Technical Blog</h2>
          <p className="blog-subtitle">Insights on cloud systems, architecture, and engineering practices</p>
        </div>

        <div className="blog-grid">
          {displayedBlogs.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-category">{post.category}</div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <span className="blog-divider">•</span>
                <span className="blog-time">{post.readTime}</span>
              </div>

              {post.date === "Coming Soon" && <div className="coming-soon">Coming Soon</div>}
            </div>
          ))}
        </div>

        {hasMoreBlogs && (
          <div className="blog-footer-cta">
            <button className="btn btn-secondary">View All Blogs ({blogPosts.length} total)</button>
          </div>
        )}

        <div className="blog-cta">
          <p>
            More articles coming soon. I share insights on cloud systems, system design, and engineering best practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Blog

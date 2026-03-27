import "./About.css"

const About = () => {
  const highlights = [
    {
      number: "7+",
      label: "Projects Built",
      description: "Production-grade applications",
    },
    {
      number: "350+",
      label: "Problems Solved",
      description: "LeetCode & DSA",
    },
    {
      number: "9.3",
      label: "Academic Excellence",
      description: "CGPA during studies",
    },
    {
      number: "10+",
      label: "Students Mentored",
      description: "Programming & Cloud",
    },
  ]

  const skillAreas = [
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Full-Stack Development",
    "System Design",
    "AI Integration",
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="about-tagline">Building intelligent systems, solving complex problems</p>
        </div>

        <div className="about-content">
          {/* Main narrative */}
          <div className="about-main">
            <div className="about-narrative">
              <h3 className="narrative-heading">Who I Am</h3>
              <p className="narrative-text">
                I'm <strong>Jayanth</strong>, a Cloud Engineer and Full-Stack Developer from India, passionate about
                building <strong>scalable, intelligent systems</strong> that solve real-world problems.
              </p>
              <p className="narrative-text">
                My journey started with competitive programming, evolved into full-stack development, and now focuses on
                <strong> cloud architecture and DevOps</strong>. I believe every line of code should serve a purpose.
              </p>
            </div>

            <div className="about-narrative">
              <h3 className="narrative-heading">What I Do</h3>
              <p className="narrative-text">
                I architect production systems that combine{" "}
                <strong>cloud infrastructure, intelligent algorithms, and clean code</strong>. From DevOps pipelines to
                AI integration, I focus on building solutions that scale.
              </p>
              <p className="narrative-text">
                <strong>Currently exploring:</strong> Distributed systems, serverless architectures, and production AI
                deployment. Every project in my portfolio represents a real learning experience.
              </p>
            </div>

            <div className="about-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Stats & Skills */}
          <div className="about-sidebar">
            <div className="about-stats">
              {highlights.map((item, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{item.number}</div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-description">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="about-skills-box">
              <h3 className="skills-title">Key Focus Areas</h3>
              <div className="skills-list">
                {skillAreas.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

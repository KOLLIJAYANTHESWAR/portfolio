import "./Skills.css"

const Skills = () => {
  const technicalSkills = [
    {
      name: "Languages",
      skills: ["Java", "JavaScript", "Python", "C", "SQL"],
    },
    {
      name: "Frontend",
      skills: ["React.js", "CSS3", "JavaScript", "Responsive Design", "Mern Stack" ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "REST APIs", "Spring Boot", "Express.js"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design"],
    },
    {
      name: "Core CS",
      skills: ["DSA", "OOP", "DBMS", "OS", "System Design", "Networking"],
    },
  ]

  const softSkills = [
    {
      name: "Communication",
      skills: ["Technical Writing", "Documentation", "Presentations", "Clarity"],
    },
    {
      name: "Leadership",
      skills: ["Team Mentoring", "Problem Solving", "Decision Making", "Collaboration"],
    },
    {
      name: "Professional",
      skills: ["Attention to Detail", "Time Management", "Adaptability", "Continuous Learning"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>


        <div className="skills-section">
          <h3 className="skills-subsection-title">Technical Expertise</h3>
          <div className="skills-grid">
            {technicalSkills.map((category, index) => (
              <div key={index} className="skill-category">
                <h4 className="category-title">{category.name}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
          <h3 className="skills-subsection-title">Soft Skills</h3>
          </div>
          <div className="skills-grid">
            {softSkills.map((category, index) => (
              <div key={index} className="skill-category soft-skill-category">
                <h4 className="category-title">{category.name}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag soft-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

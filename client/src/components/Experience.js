"use client"

import { useState } from "react"
import "./Experience.css"

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const experiences = [
    {
      id: 1,
      title: "AI-ML Virtual Internship",
      company: "Amazon Web Services (AWS)",
      organization: "EduSkills Foundation",
      image: "/images/experience1.png",
      duration: "Jan 2025 – Mar 2025",
      durationMonths: "3 months",
      location: "Remote",
      type: "Internship",
      description: "Completed structured AI & ML internship through EduSkills",
      points: [
        "Hands-on exposure to machine learning workflows and cloud-based ML services",
        "Real-world AI use cases and production deployment patterns",
        "Strengthened understanding of managing AI systems on AWS",
        "Learned best practices for scaling ML models in production",
      ],
      skills: ["AWS", "Machine Learning", "AI Systems", "Cloud"],
      links: {
        certificate: "https://drive.google.com/file/d/1_t9HLL6GL6zYGL7q3LGPeMFnI9tI-nDv/view?usp=sharing",
      },
    },
    {
      id: 2,
      title: "Core Member & Mentor",
      company: "AWS Cloud Club",
      organization: "KL University",
      image: "/images/experience2.jpg",
      duration: "Jul 2025 – Present",
      durationMonths: "7+ months",
      location: "Hybrid",
      type: "Leadership",
      description: "Leading cloud computing initiatives and mentoring students",
      points: [
        "Delivered hands-on cloud-native workshops to 200+ students",
        "Increased AWS certification participation",
        "Mentored 10+ junior students in serverless architecture and debugging",
        "Boosted club engagement and technical discussions by 35%",
      ],
      skills: ["Leadership", "Cloud Architecture", "Mentoring", "AWS"],
      links: {},
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Building expertise through real-world projects and leadership</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-image-wrapper">
                <img src={exp.image} alt={exp.company} className="marker-image" />
              </div>

              </div>

              <div className="timeline-content">
                <button
                  className={`exp-header-btn ${expandedIndex === index ? "expanded" : ""}`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                >
                  <div className="exp-header-left">
                    <div>
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="exp-header-right">
                    <span className="exp-type-badge">{exp.type}</span>
                    <span className="exp-duration-meta">{exp.durationMonths}</span>
                    <div className="expand-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="exp-details">
                    <div className="exp-info-row">
                      <div className="exp-info">
                        <span className="info-label">Organization</span>
                        <span className="info-value">{exp.organization}</span>
                      </div>
                      <div className="exp-info">
                        <span className="info-label">Duration</span>
                        <span className="info-value">{exp.duration}</span>
                      </div>
                      <div className="exp-info">
                        <span className="info-label">Location</span>
                        <span className="info-value">{exp.location}</span>
                      </div>
                    </div>

                    <p className="exp-description">{exp.description}</p>

                    <div className="exp-points-section">
                      <h4 className="exp-points-title">Key Responsibilities & Achievements</h4>
                      <ul className="exp-points">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="exp-point">
                            <span className="point-icon">→</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="exp-skills">
                      <h4 className="skills-title">Skills & Tools</h4>
                      <div className="skills-list">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.links.certificate && (
                      <a
                        href={exp.links.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-link-btn"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

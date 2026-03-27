"use client"

import { useState } from "react"
import "./Certifications.css"

const Certifications = () => {
  const [selectedView, setSelectedView] = useState("certifications")

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Foundational AWS cloud computing knowledge and best practices",
      link: "https://www.credly.com/badges/aee8c78a-67a9-4333-b57d-37bd6431d0b3/public_url",
      category: "Cloud",
      status: "Active",
      credentialId: "CLF-C02",
    },
    {
      id: 2,
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2024",
      description: "Core Azure cloud concepts and services",
      link: "https://www.credly.com/badges/9d80775c-2945-46b0-a3b3-0af014de8191/public_url",
      category: "Cloud",
      status: "Active",
      credentialId: "AZ-900",
    },
    {
      id: 3,
      name: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      year: "2024",
      description: "OCI infrastructure and deployment knowledge",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=112E723A2CF4FB974EA33DC7DAA4C03D9EA7F252106EFC0735606E5FB15BF923",
      category: "Cloud",
      status: "Active",
      credentialId: "OCI-F",
    },
    {
      id: 4,
      name: "AWS Academy Graduate - ML Foundations",
      issuer: "AWS Academy",
      year: "2024",
      description: "Machine learning concepts and AWS ML services",
      link: "https://www.credly.com/badges/85890dac-7208-4b9f-bb5a-35d32de5246c/public_url",
      category: "AI/ML",
      status: "Active",
      credentialId: "AWS-ML",
    },
    {
      id: 5,
      name: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy",
      year: "2024",
      description: "Agile methodologies and Scrum framework",
      link: "https://www.kollijayantheswar.in/scrum.pdf",
      category: "Agile",
      status: "Active",
      credentialId: "SFC",
    },
    {
      id: 6,
      name: "NPTEL Cloud Computing",
      issuer: "NPTEL",
      year: "2024",
      description: "Comprehensive cloud computing course and certification",
      link: "https://www.kollijayantheswar.in/nptel_cloud.pdf",
      category: "Cloud",
      status: "Active",
      credentialId: "NPTEL-CC",
    },
    {
      id: 7,
      name: "Linguaskill B2",
      issuer: "Cambridge Assessment",
      year: "2024",
      description: "Advanced English language proficiency",
      link: "https://www.kollijayantheswar.in/linguaskill.pdf",
      category: "Language",
      status: "Active",
      credentialId: "LANG-B2",
    },
    {
      id: 8,
      name: "Networking Course",
      issuer: "Professional Development",
      year: "2024",
      description: "Computer networking fundamentals and protocols",
      link: "https://www.kollijayantheswar.in/networking_cer.pdf",
      category: "Networking",
      status: "Active",
      credentialId: "NET-FUN",
    },
  ]

  const achievements = [
    {
      id: 1,
      category: "Competitive Programming",
      items: ["200+ DSA problems solved on LeetCode", "Active in coding contests", "Algorithm optimization expertise"],
    },
    {
      id: 2,
      category: "Leadership & Mentoring",
      items: ["Mentored 20+ students in programming", "Led technical workshops", "Community contributor"],
    },
    {
      id: 3,
      category: "Technical Excellence",
      items: ["Full-stack development expertise", "Cloud architecture design", "DevOps pipeline implementation"],
    },
    {
      id: 4,
      category: "Professional Growth",
      items: ["AWS Cloud Club member", "Continuous learner", "Technical blog contributor"],
    },
  ]

  const certsByCategory = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = []
    acc[cert.category].push(cert)
    return acc
  }, {})

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">

        <div className="section-header">
          <h2 className="section-title">Credentials & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications, awards, and key accomplishments
          </p>
        </div>

        <div className="view-toggle">
          <button
            className={`toggle-btn ${selectedView === "certifications" ? "active" : ""}`}
            onClick={() => setSelectedView("certifications")}
          >
            Certifications
          </button>

          <button
            className={`toggle-btn ${selectedView === "achievements" ? "active" : ""}`}
            onClick={() => setSelectedView("achievements")}
          >
            Achievements
          </button>
        </div>

        <div className="certifications-content">

          {selectedView === "certifications" && (
            <div className="certifications-view">
              <div className="cert-summary">
                <div className="summary-stat">
                  <span className="stat-number">{certifications.length}</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-number">{Object.keys(certsByCategory).length}</span>
                  <span className="stat-label">Categories</span>
                </div>
              </div>

              <div className="certs-grid">
                {certifications.map((cert) => (
                  <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
                    <div className="cert-header">
                      <div className="cert-category-badge">{cert.category}</div>
                      <span className="cert-year">{cert.year}</span>
                    </div>

                    <div className="cert-body">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-description">{cert.description}</p>
                    </div>

                    <div className="cert-footer">
                      <span className="cert-status">{cert.status}</span>
                      <span className="cert-link-arrow">View Credential →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {selectedView === "achievements" && (
            <div className="achievements-view">
              <div className="achievements-grid">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="achievement-card">
                    <div className="achievement-header">
                      <h4 className="achievement-title">{achievement.category}</h4>
                      <div className="achievement-indicator"></div>
                    </div>

                    <ul className="achievement-list">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-dot"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="resume-section">
          <p className="resume-text">Want to see everything?</p>
          <a
            href="https://www.kollijayantheswar.in/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
"use client"

import { useEffect } from "react"
import "./ProjectModal.css"

const ProjectModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = "unset")
  }, [])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {/* --- Hero Header Section --- */}
        <div className="modal-hero">
          <div className="hero-glow"></div>
          <div className="hero-content">
            {project.badge && <span className="modal-badge-float">{project.badge}</span>}
            <h1 className="modal-title-premium">{project.title}</h1>
            <p className="modal-tagline">{project.description}</p>
          </div>
        </div>

        <div className="modal-layout-grid">
          {/* --- Main Column: The Narrative --- */}
          <div className="modal-main-column">
            <section className="info-block">
              <div className="section-header-inline">
                <span className="accent-dot"></span>
                <h3>The Challenge</h3>
              </div>
              <p className="section-text emphasis">{project.problem}</p>
            </section>

            <section className="info-block">
              <div className="section-header-inline">
                <span className="accent-dot"></span>
                <h3>The Solution</h3>
              </div>
              <p className="section-text">{project.solution}</p>
            </section>

            <section className="info-block">
              <div className="section-header-inline">
                <span className="accent-dot"></span>
                <h3>System Architecture</h3>
              </div>
              <div className="architecture-inner-card">
                <p>{project.architecture}</p>
              </div>
            </section>

            <div className="insights-row">
              <div className="insight-box">
                <h4>Challenges</h4>
                <p>{project.challenges}</p>
              </div>
              <div className="insight-box highlight">
                <h4>Key Learnings</h4>
                <p>{project.learnings}</p>
              </div>
            </div>
          </div>

          {/* --- Sidebar: At a Glance --- */}
          <aside className="modal-sidebar">
            <div className="sidebar-section">
              <h4>Core Features</h4>
              <ul className="modern-check-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h4>Technology Stack</h4>
              <div className="glass-tech-grid">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="glass-pill">{tech}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h4>Project Assets</h4>
              <div className="btn-stack">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="asset-btn live">
                    Launch App <span>↗</span>
                  </a>
                )}
                {project.links.devopsGithub && (
                  <a href={project.links.devopsGithub} target="_blank" rel="noopener noreferrer" className="asset-btn github">
                    DevOps Repo
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="asset-btn github">
                    Source Code
                  </a>
                )}
                {project.links.frontendGithub && (
                  <a href={project.links.frontendGithub} target="_blank" rel="noopener noreferrer" className="asset-btn github">
                    Frontend Repo
                  </a>
                )}
                {project.links.backendGithub && (
                  <a href={project.links.backendGithub} target="_blank" rel="noopener noreferrer" className="asset-btn github">
                    Backend Repo
                  </a>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="asset-btn youtube">
                    Watch Demo
                  </a>
                )}
                {project.links.linkedin && (
                  <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="asset-btn linkedin">
                    LinkedIn Post
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
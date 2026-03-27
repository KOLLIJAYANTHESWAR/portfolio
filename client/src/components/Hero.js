"use client"

import { useState, useEffect } from "react"
import "./Hero.css"
const roles = ["Cloud Engineer", "Spring Boot Developer", "Computer Science Enthusiast"]
const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      } else {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1VF3wH5uwtVToqPVmJ2UEmUhK4AO1wJa6/view?usp=sharing", "_blank")
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-greeting">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">Kolli Jayanth Eswar</h1>

          <p className="hero-subtitle">{displayedRole}</p>

          <p className="hero-description">
            I build scalable, real-world systems. Specialized in cloud-native architecture, backend engineering, and AI
            integration. Currently exploring serverless systems and intelligent automation.
          </p>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Andhra Pradesh, India</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">Available for opportunities</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={downloadResume}>
              Download Resume
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/KOLLIJAYANTHESWAR"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kollijayantheswar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.047-8.733 0-9.646h3.554v1.364c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.372v5.51zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.71 0-.967.77-1.71 1.954-1.71 1.183 0 1.915.743 1.94 1.71 0 .952-.757 1.71-1.979 1.71zm1.581 11.597H3.635V9.806h3.283v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@kollijayantheswar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="YouTube Channel"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-placeholder">
            <img
              src="/images/profile.jpeg"
              alt="Kolli Jayanth Eswar"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

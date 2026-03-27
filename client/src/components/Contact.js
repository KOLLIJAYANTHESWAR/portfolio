"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("kollijayantheswar@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactLinks = [
    {
      icon: "✉️",
      label: "Email",
      value: "kollijayantheswar@gmail.com",
      href: "mailto:kollijayantheswar@gmail.com",
      action: copyEmail,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/kollijayantheswar",
      href: "https://www.linkedin.com/in/kollijayantheswar",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/KOLLIJAYANTHESWAR",
      href: "https://github.com/KOLLIJAYANTHESWAR",
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">  
        <h2 className="section-title">Get In Touch</h2>
        </div>

        <p className="contact-intro">
          I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out
          through any of the channels below.
        </p>

        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault()
                  link.action()
                }
              }}
            >
              <div className="contact-icon">{link.icon}</div>
              <div className="contact-info">
                <h4>{link.label}</h4>
                <p>{link.value}</p>
              </div>
              <div className="contact-arrow">→</div>

              {copied && link.label === "Email" && <div className="copy-notification">Copied!</div>}
            </a>
          ))}
        </div>

        <div className="contact-cta">
          <p>Ready to work together?</p>
          <p className="contact-cta-text">
            Feel free to reach out via email or connect on LinkedIn. I'd love to hear about your projects!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

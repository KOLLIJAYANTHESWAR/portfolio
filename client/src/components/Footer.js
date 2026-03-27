import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: "GitHub", url: "https://github.com/KOLLIJAYANTHESWAR", ariaLabel: "GitHub Profile" },
    { label: "LinkedIn", url: "https://linkedin.com/in/kollijayantheswar", ariaLabel: "LinkedIn Profile" },
    { label: "YouTube", url: "https://youtube.com/@kollijayantheswar", ariaLabel: "YouTube Channel" },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-name">Kolli Jayanth Eswar</h3>
          <p className="footer-tagline">Cloud Engineer • Spring Boot Developer • Computer Vision Enthusiast</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links-section">
          <div className="footer-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={link.ariaLabel}
                title={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#home" className="footer-back-link">
            Back to Top
          </a>
        </div>

        <div className="footer-copyright">
          <p>© {currentYear} Kolli Jayanth Eswar. All rights reserved.</p>
          <p className="footer-built">Built with React & Express.js</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

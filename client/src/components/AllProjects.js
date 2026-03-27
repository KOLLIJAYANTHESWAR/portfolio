"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import ProjectModal from "./ProjectModal"
import "./AllProjects.css"

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 0,
      title: "Cloud-Native Budget Planner with Automated CI/CD",
      description: "Production-grade DevOps project showcasing end-to-end CI/CD automation and cloud infrastructure",
      badge: "DevOps Project",
      techStack: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "AWS", "Ansible", "React", "Spring Boot"],
      problem: "Building production applications requires robust DevOps practices.",
      solution: "Developed a full-stack budget planner with an enterprise-grade CI/CD pipeline.",
      features: ["CI/CD pipeline", "Docker containerization", "Kubernetes orchestration"],
      architecture: "Full-stack MERN architecture with Spring Boot backend, React frontend.",
      challenges: "Orchestrating multiple DevOps tools.",
      learnings: "Production DevOps workflows.",
      links: {
        devopsGithub: "https://github.com/KOLLIJAYANTHESWAR/budget-planner-devops.git",
        frontendGithub: "https://github.com/KOLLIJAYANTHESWAR/Budget_Planner_frontend.git",
        backendGithub: "https://github.com/KOLLIJAYANTHESWAR/Budget_Planner_backend.git",
      },
    },
    {
      id: 1,
      title: "Real-Time AI Voice Agent",
      description: "Deployed conversational AI with live voice interaction and web actions",
      badge: "AI Project",
      techStack: ["React", "Node.js", "WebRTC", "LLM APIs", "Cloud Deployment"],
      problem: "Users need hands-free AI interaction.",
      solution: "Developed a voice agent with STT and TTS support.",
      features: ["Real-time voice recognition", "Live web search"],
      architecture: "React frontend with Node.js backend.",
      challenges: "Latency optimization.",
      learnings: "Real-time systems design.",
      links: {
          github: "https://github.com/KOLLIJAYANTHESWAR/30-Days-of-AI-Voice-Agents.git",
          demo: "https://ai-voice-agent-p7ct.onrender.com/",
        },
    },
    {
      id: 2,
      title: "Secure Digital Locker",
      description: "Role-based secure document management system with approval workflows",
      badge: "Cloud Native",
      techStack: ["Spring Boot", "MySQL", "JWT", "GCP", "Hibernate"],
      problem: "Organizations need secure document management with strict access control.",
      solution: "Built a secure backend with RBAC and JWT.",
      features: ["JWT authentication", "GCP storage integration"],
      architecture: "Layered Spring Boot architecture.",
      challenges: "Designing hierarchical workflows.",
      learnings: "Advanced Spring Security.",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/SecureDigitalLocker.git"
      },
    },
    {
      id: 3,
      title: "Cloud-Native Notes App with Terraform",
      description: "Scalable AWS infrastructure managed with Infrastructure as Code",
      badge: "Cloud Native",
      techStack: ["React", "AWS EC2", "S3", "RDS", "Terraform"],
      problem: "Building scalable applications requires robust infrastructure management.",
      solution: "Developed a cloud-native notes app provisioned through Terraform.",
      features: ["Auto-scaling EC2", "RDS managed database"],
      architecture: "Terraform-managed AWS infrastructure.",
      challenges: "Optimizing AWS costs.",
      learnings: "Infrastructure as Code best practices.",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/notes-app.git",
        youtube: "https://youtu.be/ld-cn93g_Kc",
      },
    },
    {
      id: 4,
      title: "CineVerse Scalable Social Backend",
      description: "Production-grade Movie Social Platform API with Redis caching, Dockerization, and automated CI/CD pipelines.",
      badge: "Backend & DevOps",
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "GitHub Actions", "JWT"],
      problem: "Social platforms require high availability, real-time interactions, and scalable infrastructure to handle concurrent user requests and heavy data processing.",
      solution: "Engineered a modular REST API using Node.js and Express, integrated Redis for high-performance caching and rate limiting, and implemented a full CI/CD pipeline for automated deployment.",
      features: [
        "JWT-based Authentication with Role-Based Access Control (RBAC)",
        "Real-time Chat & Group system architecture ready for Redis Pub/Sub",
        "Automated CI/CD workflows using GitHub Actions for linting and building",
        "Containerized environment using Docker for consistent production parity",
        "Advanced Rate Limiting and System Health Monitoring endpoints",
        "Admin Moderation suite with integrated Audit Logging"
      ],
      architecture: "Modular Monolith moving toward Microservices. Node.js/Express server layer, MongoDB for primary persistence, Redis for caching/sessions, and Docker for orchestration.",
      challenges: "Managing state across distributed systems, optimizing MongoDB connection pooling, and securing high-traffic API endpoints against brute-force attacks.",
      learnings: "Production API design, Redis-backed scalability, Dockerized workflow management, and implementing secure, role-based moderation systems.",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/Cinevraix-backend.git"
      },
    },
    {
      id: 5,
      title: "Intelligent Plagiarism Detection Engine",
      description: "Semantic NLP analysis for text and code plagiarism detection",
      techStack: ["React", "Node.js", "MongoDB", "NLP", "GitHub API"],
      problem: "Traditional plagiarism checkers miss semantic similarities.",
      solution: "Built an advanced detection system using SentenceTransformer.",
      features: ["Semantic detection", "Code comparison via GitHub API"],
      architecture: "MERN stack with Python Flask backend.",
      challenges: "Implementing accurate NLP models.",
      learnings: "Advanced NLP techniques.",
      links: {
        frontendGithub: "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-frontend",
        backendGithub: "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-backend",
      },
    },
    
    {
      id: 6,
      title: "Smart Weather & AI Route Planner",
      description: "NLP-based travel safety platform with real-time weather alerts",
      techStack: ["React", "Node.js", "NLP", "MySQL", "OpenStreetMap"],
      problem: "Route planning doesn't account for weather conditions.",
      solution: "Built an intelligent platform combining NLP and weather APIs.",
      features: ["NLP trip input", "Real-time weather alerts"],
      architecture: "React frontend with Node.js/Express backend.",
      challenges: "Integrating multiple third-party APIs.",
      learnings: "Working with geolocation services.",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/Weather_app.git",
        youtube: "https://youtu.be/kfnXvbckn1U",
      },
    },
    
    
]

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="all-projects">
      <div className="archive-container">
        <header className="archive-header">
          <Link to="/" className="back-home-link">
            <span>←</span> Back to Portfolio
          </Link>
          <h1 className="archive-title">Project Archive</h1>
          <p className="archive-subtitle">
            A complete collection of my technical work, from DevOps pipelines to AI agents.
          </p>

          <div className="archive-search-bar">
            <input
              type="text"
              placeholder="Search by tech or title..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <div className="archive-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="archive-card">
                {/* Badge Fix */}
                {project.badge && <span className="archive-badge">{project.badge}</span>}
                
                <div className="archive-content">
                  <h3 className="archive-project-title">{project.title}</h3>
                  <p className="archive-project-desc">{project.description}</p>
                  
                  <div className="archive-tech-tags">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="archive-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <button className="archive-btn" onClick={() => setSelectedProject(project)}>
                  View Case Study
                </button>
              </div>
            ))
          ) : (
            <div className="no-projects">No projects found matching your search.</div>
          )}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default AllProjects
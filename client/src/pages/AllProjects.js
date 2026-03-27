"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProjectModal from "../components/ProjectModal"
import "../styles/AllProjects.css"

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const navigate = useNavigate()

  const allProjects = [
    {
      id: 0,
      title: "Cloud-Native Budget Planner with Automated CI/CD",
      description: "Production-grade DevOps project showcasing end-to-end CI/CD automation and cloud infrastructure",
      badge: "Flagship DevOps Project",
      techStack: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "AWS",
        "Ansible",
        "React",
        "Spring Boot",
      ],
      problem:
        "Building production applications requires robust DevOps practices: reliable deployments, infrastructure scaling, automated testing, and containerization. Most portfolios lack real-world DevOps implementation.",
      solution:
        "Developed a full-stack budget planner with an enterprise-grade CI/CD pipeline demonstrating real DevOps workflows. Every code push triggers automated tests, Docker containerization, and Kubernetes orchestration—exactly like production teams.",
      features: [
        "Add, edit, and track income & expenses with real-time updates",
        "Expense categorization and detailed monthly budget summaries",
        "Interactive spending pattern visualization and forecasting",
        "Responsive React UI for seamless user experience",
        "Secure REST APIs with structured data handling",
        "Full CI/CD pipeline with GitHub Actions + Jenkins integration",
        "Automated unit and integration testing on every commit",
        "Docker containerization for frontend and backend",
        "Kubernetes orchestration for scalability and high availability",
        "Ansible-automated server provisioning and configuration",
        "Infrastructure as Code with Terraform for reproducible deployments",
        "MySQL database with automated backups and replication",
      ],
      architecture:
        "Full-stack MERN architecture with Spring Boot backend, React frontend, all containerized with Docker. Kubernetes handles orchestration. GitHub Actions triggers Jenkins CI pipeline. Terraform provisions AWS infrastructure (EC2, RDS, S3). Ansible automates deployment. MySQL manages persistent data.",
      challenges:
        "Orchestrating multiple DevOps tools, managing container networking in Kubernetes, securing credentials in CI/CD, optimizing container layer caching, debugging distributed system failures, cost optimization across AWS services",
      learnings:
        "Production DevOps workflows, Kubernetes cluster management, CI/CD pipeline design, infrastructure automation, container best practices, cloud deployment patterns, monitoring and logging in distributed systems, cost-conscious architecture design",
      links: {
        devopsGithub: "https://github.com/KOLLIJAYANTHESWAR/budget-planner-devops.git",
        frontendGithub: "https://github.com/KOLLIJAYANTHESWAR/Budget_Planner_frontend.git",
        backendGithub: "https://github.com/KOLLIJAYANTHESWAR/Budget_Planner_backend.git",
      },
    },
    {
      id: 1,
      title: "Smart Weather & AI Route Planner",
      description: "NLP-based travel safety platform with real-time weather alerts",
      techStack: ["React", "Node.js", "NLP", "MySQL", "OpenStreetMap"],
      problem:
        "Route planning doesn't account for weather conditions, making travelers vulnerable to unsafe conditions.",
      solution:
        "Built an intelligent platform combining NLP for natural trip planning, real-time weather APIs, and OpenStreetMap routing to suggest the safest routes.",
      features: [
        "Natural language trip input ('Trip to Vizag on July 20')",
        "Real-time weather forecasting and alerts",
        "Safe route recommendations with weather risk assessment",
        "Interactive Leaflet map with OSRM routing",
        "Trip history persistence in MySQL",
        "Automated weather alerts for saved locations",
      ],
      architecture:
        "React frontend with Node.js/Express backend, integrated weather APIs, OSRM for route optimization, MySQL for persistence",
      challenges:
        "Integrating multiple third-party APIs, handling real-time weather data, optimizing route calculations for large datasets",
      learnings:
        "Working with geolocation services, API orchestration, real-time data processing, and building user-centric safety features",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/Weather_app.git",
        youtube: "https://youtu.be/kfnXvbckn1U",
        linkedin:
          "https://www.linkedin.com/posts/kollijayantheswar_ai-weatherapp-reminderservice-activity-7352216977513304067-VSLG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo7I4IBp77nzBe84D9ifNxtmoP1DKx2gQk",
      },
    },
    {
      id: 2,
      title: "Cloud-Native Notes App with Terraform",
      description: "Scalable AWS infrastructure managed with Infrastructure as Code",
      techStack: ["React", "AWS EC2", "S3", "RDS", "Terraform"],
      problem:
        "Building scalable applications requires robust, reproducible infrastructure management that scales automatically.",
      solution:
        "Developed a fully cloud-native notes application with AWS services (EC2, S3, RDS) entirely provisioned through Terraform infrastructure as code.",
      features: [
        "Serverless-ready architecture on AWS",
        "Auto-scaling EC2 instances",
        "S3-backed file storage with automatic backups",
        "RDS managed database with high availability",
        "Infrastructure versioning with Terraform",
        "One-command infrastructure deployment",
      ],
      architecture:
        "Terraform-managed AWS infrastructure with EC2 for compute, S3 for storage, RDS for database, all version-controlled",
      challenges:
        "Optimizing AWS costs, managing Terraform state, ensuring high availability, debugging cloud infrastructure issues",
      learnings:
        "Infrastructure as Code best practices, AWS services deep dive, Terraform modules, cloud cost optimization, production deployment patterns",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/notes-app.git",
        youtube: "https://youtu.be/ld-cn93g_Kc",
      },
    },
    {
      id: 3,
      title: "Intelligent Plagiarism Detection Engine",
      description: "Semantic NLP analysis for text and code plagiarism detection",
      techStack: ["React", "Node.js", "MongoDB", "NLP", "GitHub API"],
      problem:
        "Traditional plagiarism checkers miss semantic similarities and can't detect paraphrased or restructured content.",
      solution:
        "Built an advanced detection system using SentenceTransformer and Parrot models for semantic analysis, plus GitHub API integration for code comparison.",
      features: [
        "Semantic plagiarism detection using NLP models",
        "Code plagiarism detection via GitHub API",
        "Semantic, lexical, and structural analysis reports",
        "AI-powered content rewriting suggestions",
        "Article finder by title analysis",
        "Flexible API integration for custom analysis",
      ],
      architecture: "MERN stack with Python Flask backend for NLP, GitHub API integration, MongoDB for report storage",
      challenges:
        "Implementing accurate NLP models, handling large documents, managing API rate limits, optimizing model inference time",
      learnings:
        "Advanced NLP techniques, semantic similarity, Hugging Face models, production ML deployment, handling complex data pipelines",
      links: {
        frontendGithub: "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-frontend",
        backendGithub: "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-backend",
        youtube: "https://youtu.be/dUreCv4iW6Q",
        linkedin:
          "https://www.linkedin.com/posts/kollijayantheswar_ai-plagiarismdetection-nlp-activity-7351200531521921024-aez6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo7I4IBp77nzBe84D9ifNxtmoP1DKx2gQk",
      },
    },
    {
      id: 4,
      title: "Real-Time AI Voice Agent",
      description: "Deployed conversational AI with live voice interaction and web actions",
      techStack: ["React", "Node.js", "WebRTC", "LLM APIs", "Cloud Deployment"],
      problem: "Users need hands-free AI interaction with real-world information access and natural conversation flow.",
      solution:
        "Developed a deployed voice agent with Speech-to-Text, LLM processing, and Text-to-Speech, supporting web search, weather, and website navigation.",
      features: [
        "Real-time voice recognition and synthesis",
        "Natural language understanding and responses",
        "Live web search integration",
        "Weather forecasting with smart suggestions",
        "Voice-controlled website navigation",
        "Persona-aware conversational intelligence",
        "Production cloud deployment on Render",
      ],
      architecture:
        "React frontend with Web Audio APIs, Node.js backend with LLM integration, deployed on Render with real-time streaming",
      challenges:
        "Real-time audio buffering, dynamic tool invocation, latency optimization, production DevOps, handling concurrent voice sessions",
      learnings:
        "Real-time systems design, WebRTC, audio processing, LLM orchestration, cloud deployment debugging, production reliability engineering",
      links: {
        github: "https://github.com/KOLLIJAYANTHESWAR/30-Days-of-AI-Voice-Agents.git",
        demo: "https://ai-voice-agent-p7ct.onrender.com/",
        youtube: "https://youtu.be/_FTcFXo_DS0",
        linkedin:
          "https://www.linkedin.com/posts/kollijayantheswar_day30-30daysofaivoiceagents-ai-activity-7367996677741268994-rGUe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo7I4IBp77nzBe84D9ifNxtmoP1DKx2gQk",
      },
    },
    {
      id: 5,
      title: "Advanced Project #6",
      description: "Coming soon - Next generation cloud infrastructure project",
      techStack: ["React", "Node.js", "Kubernetes", "AWS"],
      problem: "Placeholder for upcoming advanced project",
      solution: "To be announced",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      architecture: "Advanced cloud-native architecture",
      challenges: "TBD",
      learnings: "TBD",
      links: {
        github: "#",
      },
    },
  ]

  return (
    <div className="all-projects">
      <button className="back-button" onClick={() => navigate("/#projects")}>
        ← Back to Home
      </button>

      <div className="all-projects-header">
        <h1 className="all-projects-title">All Projects</h1>
        <p className="all-projects-subtitle">
          Complete collection of my work spanning full-stack development, cloud architecture, and AI systems
        </p>
      </div>

      <div className="all-projects-grid">
        {allProjects.map((project) => (
          <div key={project.id} className="project-card-all">
            {project.badge && <div className="project-badge">{project.badge}</div>}

            <div className="project-content-all">
              <h3 className="project-title-all">{project.title}</h3>
              <p className="project-description-all">{project.description}</p>

              <div className="project-tech-all">
                {project.techStack.slice(0, 5).map((tech, index) => (
                  <span key={index} className="tech-badge-all">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="tech-badge-all">+{project.techStack.length - 5} more</span>
                )}
              </div>

              <button className="project-btn-all" onClick={() => setSelectedProject(project)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default AllProjects

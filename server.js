const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==============================
// Middleware
// ==============================
app.use(
  cors({
    origin: "*", // restrict later when deployed
    methods: ["GET"],
  })
);

app.use(express.json());

// ==============================
// API ROUTES
// ==============================

// ------------------------------
// Portfolio Core Info
// ------------------------------
app.get("/api/portfolio", (req, res) => {
  res.status(200).json({
    name: "Kolli Jayanth Eswar",
    title: "Cloud Engineer | MERN Stack Developer | AI Systems Builder",
    location: "Andhra Pradesh, India",
    cgpa: "9.3",
    email: process.env.CONTACT_EMAIL || "kollijayantheswar@gmail.com",

    links: {
      github: "https://github.com/KOLLIJAYANTHESWAR",
      linkedin: "https://linkedin.com/in/kollijayantheswar",
      youtube: "https://youtube.com/@kollijayantheswar",
      resume:
        "https://drive.google.com/file/d/1mZkPqPS70-w8T9NqxxxwMwdqop6AzTTB/view?usp=sharing",
    },
  });
});

// ------------------------------
// Projects (ALL Projects)
// ------------------------------
app.get("/api/projects", (req, res) => {
  res.status(200).json([
    {
      title: "Smart Weather & AI Route Safety Planner",
      type: "Full Stack | AI",
      stack: ["React", "Node.js", "MySQL", "NLP", "OpenStreetMap"],
      github: "https://github.com/KOLLIJAYANTHESWAR/Weather_app.git",
      youtube: "https://youtu.be/kfnXvbckn1U",
      linkedin:
        "https://www.linkedin.com/posts/kollijayantheswar_ai-weatherapp-reminderservice-activity-7352216977513304067-VSLG",
    },
    {
      title: "Cloud-Native Notes App (Terraform + AWS)",
      type: "DevOps | Cloud",
      stack: ["AWS EC2", "S3", "RDS", "Terraform", "Docker"],
      github: "https://github.com/KOLLIJAYANTHESWAR/notes-app.git",
      youtube: "https://youtu.be/ld-cn93g_Kc",
    },
    {
      title: "Intelligent Plagiarism Detection Engine",
      type: "MERN | NLP",
      stack: ["React", "Node.js", "NLP", "GitHub API"],
      githubFrontend:
        "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-frontend",
      githubBackend:
        "https://github.com/KOLLIJAYANTHESWAR/plagiarism-checker-backend",
      youtube: "https://youtu.be/dUreCv4iW6Q",
    },
    {
      title: "Real-Time AI Voice Agent",
      type: "AI | Voice | Cloud",
      stack: ["React", "Node.js", "LLM APIs", "WebRTC"],
      github:
        "https://github.com/KOLLIJAYANTHESWAR/30-Days-of-AI-Voice-Agents.git",
      youtube: "https://youtu.be/_FTcFXo_DS0",
      live: "https://ai-voice-agent-p7ct.onrender.com/",
    },
  ]);
});

// ------------------------------
// Experience
// ------------------------------
app.get("/api/experience", (req, res) => {
  res.status(200).json([
    {
      role: "AI-ML Virtual Intern",
      organization: "Amazon Web Services (AWS)",
      duration: "Jan 2025 – Mar 2025",
      location: "Remote, India",
      proof:
        "https://drive.google.com/file/d/1_t9HLL6GL6zYGL7q3LGPeMFnI9tI-nDv/view",
    },
  ]);
});

// ------------------------------
// Education
// ------------------------------
app.get("/api/education", (req, res) => {
  res.status(200).json([
    {
      level: "B.Tech - Computer Science",
      institution: "KL University",
      website: "https://www.kluniversity.in/",
    },
    {
      level: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      website: "https://srichaitanya.net/",
    },
    {
      level: "SSC (10th)",
      institution: "Chigurupati Sri Krishnaveni School",
      score: "9.8",
      website: "https://www.cskvschools.in/",
    },
  ]);
});

// ------------------------------
// Certifications
// ------------------------------
app.get("/api/certifications", (req, res) => {
  res.status(200).json([
    {
      name: "AWS Certified Cloud Practitioner",
      link:
        "https://www.credly.com/badges/aee8c78a-67a9-4333-b57d-37bd6431d0b3",
    },
    {
      name: "Azure Fundamentals (AZ-900)",
      link:
        "https://www.credly.com/badges/9d80775c-2945-46b0-a3b3-0af014de8191",
    },
    {
      name: "NPTEL – Cloud Computing",
      link:
        "https://drive.google.com/file/d/1C_3nvOr3adzfcJJ3NgbacTAjENWy2Xjd",
    },
  ]);
});

// ------------------------------
// Health Check
// ------------------------------
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ==============================
// Serve React Frontend
// ==============================
const clientBuildPath = path.join(__dirname, "client", "build");
app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ==============================
// Start Server
// ==============================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

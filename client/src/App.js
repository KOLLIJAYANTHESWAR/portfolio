"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop" // ✅ important

import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AllProjects from "./components/AllProjects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import NotFound from "./pages/NotFound"

import "./App.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [themeLoaded, setThemeLoaded] = useState(false)

  // ================= THEME LOAD =================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-mode")

    const prefersDark =
      savedTheme !== null
        ? savedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches

    setIsDarkMode(prefersDark)
    document.documentElement.classList.toggle("dark-mode", prefersDark)
    setThemeLoaded(true)
  }, [])

  // ================= THEME TOGGLE =================
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextTheme = !prev
      localStorage.setItem("theme-mode", nextTheme ? "dark" : "light")
      document.documentElement.classList.toggle("dark-mode", nextTheme)
      return nextTheme
    })
  }

  if (!themeLoaded) return null

  return (
    <Router>
      {/* ✅ SCROLL FIX */}
      <ScrollToTop />

      <div className="app">
        <Navigation onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

        <Routes>
          {/* ================= HOME PAGE ================= */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects /> {/* shows 3 projects */}
                <Experience />
                <Education />
                <Certifications />
                <Contact />
              </main>
            }
          />

          {/* ================= ALL PROJECTS PAGE ================= */}
          <Route path="/allprojects" element={<AllProjects />} />

          {/* ================= 404 ================= */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
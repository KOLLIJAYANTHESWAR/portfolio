import "./Education.css"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "KL University",
      image: "/images/university.jpg",
      field: "Computer Science & Engineering",
      duration: "2023 - 2027",
      cgpa: "9.3/10",
      website: "https://www.kluniversity.in",
      details: [
        "Strong foundation in Data Structures, Algorithms, DBMS, OS, Computer Networks",
        "Consistent academic excellence with focus on practical application",
        "Active in technical clubs and mentoring junior students",
      ],
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      image: "/images/collage.png",
      field: "Mathematics, Physics, Chemistry",
      duration: "2021 - 2023",
      cgpa: "9.7/10",
      website: "https://www.srichaitanya.net",
      details: [
        "Specialized in Science stream with focus on problem-solving",
        "Strong physics and mathematics foundation",
      ],
    },
    {
      degree: "10th Grade",
      institution: "Chigurupati Sri Krishnaveni School",
      image: "/images/school.png",
      field: "General Education",
      duration: "Completed 2021",
      cgpa: "9.8/10",
      website: "https://www.cskvschools.in/",
      details: ["Academic excellence with 9.8 CGPA", "Demonstrated consistent learning and discipline"],
    },
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic journey that built my technical foundation
        </p>
      </div>


        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="timeline-marker">
                <div className="marker-image-wrapper">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="marker-image"
                  />
                </div>
              </div>


              <div className="education-content">
                <div className="edu-header">
                  <div>
                    <h3 className="degree">{edu.degree}</h3>
                    <a href={edu.website} target="_blank" rel="noopener noreferrer" className="institution">
                      {edu.institution}
                    </a>
                  </div>
                  <span className="cgpa-badge">{edu.cgpa}</span>
                </div>

                <p className="field">{edu.field}</p>
                <p className="duration">{edu.duration}</p>

                <ul className="edu-details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

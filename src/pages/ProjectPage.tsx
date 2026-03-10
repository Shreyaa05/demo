import { useParams, Link, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.indexOf(project)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="project-hero">
        <div className="project-hero-text">
          <div className="sl2">{project.category}</div>
          <h1 className="page-h1" style={{ fontSize: 'clamp(2.8rem,6vw,6rem)' }}>{project.name.toUpperCase()}</h1>
          <p className="page-desc">{project.description}</p>
        </div>
        <div className="project-hero-img">
          <img src={project.image} alt={project.name} />
        </div>
      </section>

      {/* Info Bar */}
      <div className="project-info-bar">
        <div className="project-info-item">
          <div className="pinfo-label">Client</div>
          <div className="pinfo-value">{project.client}</div>
        </div>
        <div className="project-info-item">
          <div className="pinfo-label">Year</div>
          <div className="pinfo-value">{project.year}</div>
        </div>
        <div className="project-info-item">
          <div className="pinfo-label">Duration</div>
          <div className="pinfo-value">{project.duration}</div>
        </div>
        <div className="project-info-item">
          <div className="pinfo-label">Category</div>
          <div className="pinfo-value">{project.category}</div>
        </div>
      </div>

      {/* Description */}
      <section className="project-body">
        <div className="project-body-left">
          <div className="sl2">Overview</div>
          <h2 className="st" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>THE<br />PROJECT</h2>
        </div>
        <div className="project-body-right">
          <p className="project-full-desc">{project.fullDescription}</p>
          <div className="project-tags">
            {project.tags.map(tag => <span key={tag} className="svtag">{tag}</span>)}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="project-gallery">
        {project.gallery.map((img, i) => (
          <div key={i} className={`gallery-item${i === 0 ? ' wide' : ''}`}>
            <img src={img} alt={`${project.name} screenshot ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* Results */}
      <section className="project-results">
        <div className="sl2">Results</div>
        <h2 className="st">KEY<br />OUTCOMES</h2>
        <div className="results-grid">
          {project.results.map((r, i) => (
            <div key={i} className="result-card">
              <div className="result-num">0{i + 1}</div>
              <div className="result-text">{r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="next-project">
        <div className="sl2">Next Project</div>
        <Link to={`/work/${nextProject.id}`} className="next-project-link">
          <h2 className="st" style={{ marginBottom: 0 }}>{nextProject.name.toUpperCase()}</h2>
          <span className="next-arr">↗</span>
        </Link>
        <div className="next-project-img">
          <img src={nextProject.image} alt={nextProject.name} />
        </div>
      </section>

      <Footer />
    </>
  )
}

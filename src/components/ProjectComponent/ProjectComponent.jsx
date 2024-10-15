import React, { useEffect, useState, useRef } from 'react'
import projectStyles from './ProjectComponent.module.css'
import fetchProjects from '../../services/fetchProject'

function ProjectComponent() {
    const [projects, setProjects] = useState([])
    const [visibleCards, setVisibleCards] = useState(new Set())
    const projectRefs = useRef([])

    useEffect(() => {
        const projectData = fetchProjects()
        setProjects(projectData)
        setVisibleCards(new Set())
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleCards((prev) =>
                        new Set(prev).add(entry.target.id)
                    )
                    observer.unobserve(entry.target)
                }
            })
        })

        projectRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [projects])

    return (
        <div className={projectStyles.projectGrid}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${projectStyles.projectCard} ${
                        visibleCards.has(`project-${index}`)
                            ? `${projectStyles.visible} ${projectStyles.fadeIn}`
                            : ''
                    }`}
                    ref={(el) => (projectRefs.current[index] = el)}
                    id={`project-${index}`}>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className={projectStyles.projectImage}
                    />
                    <div className={projectStyles.projectDetails}>
                        <h3 className={projectStyles.projectTitle}>
                            {project.title}
                        </h3>
                        <p className={projectStyles.projectDescription}>
                            {project.description}
                        </p>
                    </div>
                    <div className={projectStyles.hoverOverlay}>
                        <button className={projectStyles.uiverseButton}>
                            <p className={projectStyles.button_text}>
                                View Details
                            </p>
                            <span className={projectStyles.buttonIconWrapper}>
                                <svg
                                    viewBox='0 0 14 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className={projectStyles.buttonIconSvg}
                                    width='10'>
                                    <path
                                        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
                                        fill='white'></path>
                                </svg>
                                <svg
                                    viewBox='0 0 14 15'
                                    fill='none'
                                    width='10'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className={`${projectStyles.buttonIconSvg} ${projectStyles.buttonIconSvgCopy}`}>
                                    <path
                                        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
                                        fill='white'></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponent

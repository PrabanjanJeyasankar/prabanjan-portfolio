import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import projectStyles from './ProjectComponent.module.css'
import fetchProjects from '../../../services/fetchProject'

function ProjectComponent() {
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const projectData = await fetchProjects()
            setProjects(projectData)
        }

        fetchData()
    }, [])

    const handleViewDetails = (projectId) => {
        navigate(`/viewproject/${projectId}`)
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 50)
    }

    return (
        <div className={projectStyles.projectGrid}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={projectStyles.projectCard}
                    id={`project-${index}`}>
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className={`${projectStyles.projectImage} ${
                            project.loaded ? projectStyles.loaded : ''
                        }`}
                        onLoad={(e) => {
                            e.currentTarget.classList.add(projectStyles.loaded)
                        }}
                    />
                    <div className={projectStyles.projectDetails}>
                        <h3 className={projectStyles.projectTitle}>
                            {project.title}
                        </h3>
                        <p className={projectStyles.projectRole}>
                            {project.role}
                        </p>
                    </div>
                    <div className={projectStyles.hoverOverlay}>
                        <button
                            className={projectStyles.view_details_button}
                            onClick={() => handleViewDetails(project.id)}>
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
                                        fill='white'
                                    />
                                </svg>
                                <svg
                                    viewBox='0 0 14 15'
                                    fill='none'
                                    width='10'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className={`${projectStyles.buttonIconSvg} ${projectStyles.buttonIconSvgCopy}`}>
                                    <path
                                        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
                                        fill='white'
                                    />
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

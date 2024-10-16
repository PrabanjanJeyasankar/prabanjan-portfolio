import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import viewProjectStyles from './ViewProjectComponent.module.css'
import fetchProjects from '../../services/fetchProject'

function ViewProjectComponent() {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        const projectData = fetchProjects().find(
            (project) => project.id === parseInt(id)
        )
        setProject(projectData)
    }, [id])

    if (!project) {
        return <div>Loading...</div>
    }

    return (
        <div className={viewProjectStyles.project_details_container}>
            <div className={viewProjectStyles.project_header}>
                <h1 className={viewProjectStyles.project_title}>
                    {project.title}
                </h1>
                <p className={viewProjectStyles.project_subtitle}>
                    {project.subtitle}
                </p>
            </div>
            <img
                src={project.thumbnail}
                alt={project.title}
                className={viewProjectStyles.project_image}
            />
            <div className={viewProjectStyles.projectMeta}>
                {project.hostedLink && (
                    <div className={viewProjectStyles.hosted_link_container}>
                        <span className={viewProjectStyles.hosted_link_title}>
                            Hosted Link
                        </span>
                        <a
                            href={project.hostedLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={viewProjectStyles.hosted_link}>
                            Visit Project
                        </a>
                    </div>
                )}
                
                <div className={viewProjectStyles.tech_stack_container}>
                    <span className={viewProjectStyles.tech_stack_title}>
                        Tech stack used
                    </span>
                    <span className={viewProjectStyles.tech_stack}>
                        {project.techStack.join(', ')}
                    </span>
                </div>
                <div className={viewProjectStyles.description_container}>
                    <span className={viewProjectStyles.description_title}>
                        Description
                    </span>
                    <span className={viewProjectStyles.description}>
                        {project.description}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ViewProjectComponent

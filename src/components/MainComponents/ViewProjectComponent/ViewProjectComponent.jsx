import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import viewProjectStyles from './ViewProjectComponent.module.css'
import fetchProjects from '../../../services/fetchProject'
import MetaSection from '../../SupportComponents/ProjectMetaSection/ProjectMetaSection'

function ViewProjectComponent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

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
        <div
            className={`${viewProjectStyles.project_details_container} ${
                isVisible ? viewProjectStyles.visible : ''
            }`}>
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
            <div className={viewProjectStyles.project_meta}>
                {project.hostedLink && (
                    <MetaSection
                        title='Hosted Link'
                        content={
                            <a
                                href={project.hostedLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={viewProjectStyles.hosted_link}>
                                Visit Project
                            </a>
                        }
                    />
                )}
                <MetaSection title='Role' content={project.role} />
                <MetaSection
                    title='Tech Stack'
                    content={project.techStack.join(', ')}
                />
                <MetaSection
                    title='Description'
                    content={project.description}
                />
            </div>
        </div>
    )
}

export default ViewProjectComponent

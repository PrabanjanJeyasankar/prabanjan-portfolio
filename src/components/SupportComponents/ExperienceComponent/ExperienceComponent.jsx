import React from 'react'
import expStyles from './ExperienceComponent.module.css'
import experiences from '../../../data/experienceData'
import { Link } from 'react-router-dom'
import HeroAppIconsComponent from '../HeroAppIconsComponent/HeroAppIconsComponent'

function ExperienceComponent() {
    // Filter professional and hackathon experiences
    const professionalExperiences = experiences.filter(
        (exp) => exp.type === 'professional'
    )
    const hackathonExperiences = experiences.filter(
        (exp) => exp.type === 'hackathon'
    )

    return (
        <div className={expStyles.outer_container}>
            {/* Professional Experience Section */}
            <h1 className={expStyles.title}>Professional Experience</h1>
            {professionalExperiences.map((experience, index) => (
                <div
                    key={index}
                    className={`${expStyles.entry} ${
                        index === professionalExperiences.length - 1
                            ? ''
                            : expStyles.withBorder
                    }`}>
                    <div className={expStyles.inner_container}>
                        <div className={expStyles.header}>
                            <p className={expStyles.year}>{experience.year}</p>
                        </div>
                        <div className={expStyles.meta}>
                            <p className={expStyles.company}>
                                {experience.company} ({experience.year})
                            </p>
                            <p className={expStyles.role}>{experience.role}</p>
                            <p className={expStyles.responsibilities}>
                                Responsibilities:
                                {experience.responsibilities}
                            </p>
                            <p className={expStyles.impact}>
                                Impact: {experience.impact}
                            </p>
                            {experience.sample_work && (
                                <p className={expStyles.sampleWork}>
                                    Work:
                                    <Link to='/viewproject/5'>Arcexperio</Link>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Hackathon Experience Section */}
            <h1 className={expStyles.title}>Hackathon Experience</h1>
            {hackathonExperiences.map((experience, index) => (
                <div
                    key={index}
                    className={`${expStyles.entry} ${
                        index === hackathonExperiences.length - 1
                            ? ''
                            : expStyles.withBorder
                    }`}>
                    <div className={expStyles.inner_container}>
                        <div className={expStyles.header}>
                            <span className={expStyles.event}>
                                <span className={expStyles.event_name}>
                                    {experience.name}
                                </span>
                                <span className={expStyles.event_position}>
                                    {experience.position}
                                </span>
                            </span>
                        </div>
                        <div className={expStyles.meta}>
                            <p className={expStyles.project}>
                                {experience.project}
                            </p>
                            <p className={expStyles.hackathon_role}>
                                {experience.role}
                            </p>
                            <p className={expStyles.details}>
                                {experience.details}
                            </p>
                            <p className={expStyles.outcome}>
                                {experience.outcome}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <h1 className={expStyles.stacks_title}>Stacks</h1>
            <HeroAppIconsComponent />
        </div>
    )
}

export default ExperienceComponent

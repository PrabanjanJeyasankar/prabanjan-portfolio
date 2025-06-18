import { Link } from 'react-router-dom'
import { appsIconForSkills } from '../../../data/appIconsData'
import experiences from '../../../data/experienceData'
import expStyles from './ExperienceComponent.module.css'

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
              <p className={expStyles.company}>{experience.company}</p>
              <p className={expStyles.role}>{experience.role}</p>
              <p className={expStyles.responsibilities}>
                Responsibilities:
                {experience.responsibilities}
              </p>
              <p className={expStyles.impact}>Impact: {experience.impact}</p>
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
                <span className={expStyles.event_name}>{experience.name}</span>
                <span className={expStyles.event_position}>
                  {experience.position}
                </span>
              </span>
            </div>
            <div className={expStyles.meta}>
              <p className={expStyles.project}>{experience.project}</p>
              <p className={expStyles.hackathon_role}>{experience.role}</p>
              <p className={expStyles.details}>{experience.details}</p>
              <p className={expStyles.outcome}>{experience.outcome}</p>
            </div>
          </div>
        </div>
      ))}
      <h1 className={expStyles.skills_title}>Skills</h1>
      <div className={expStyles.skills_icon_container}>
        {appsIconForSkills.map((app, index) => (
          <div key={index} className={expStyles.icon_wrapper}>
            <div
              className={`${expStyles.icon} ${
                app.name === 'GitHub' ? expStyles.icon_github : ''
              }`}>
              <div className={expStyles.image_container}>
                <img
                  src={app.icon}
                  alt={app.name}
                  className={expStyles.app_icon_image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceComponent

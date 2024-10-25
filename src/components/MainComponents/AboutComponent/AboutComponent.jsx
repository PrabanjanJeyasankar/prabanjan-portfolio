import React, { useEffect, useState } from 'react'
import aboutStyles from './AboutComponent.module.css'
import prabanjanImage from '../../../assets/images/prabanjan_img.jpg'
import ExperienceComponent from '../../SupportComponents/ExperienceComponent/ExperienceComponent'

function AboutComponent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={`${aboutStyles.container} ${
                isVisible ? aboutStyles.visible : ''
            }`}>
            <div className={aboutStyles.glimpse_container}>
                <h1 className={aboutStyles.title}>A Glimpse of Me</h1>
                <div className={aboutStyles.content}>
                    <img
                        src={prabanjanImage}
                        alt='Prabanjan'
                        className={aboutStyles.image}
                    />
                    <div className={aboutStyles.text_content}>
                        <p className={aboutStyles.paragraph}>
                            Okay, so here&rsquo;s where I&rsquo;m supposed to
                            convince you that I&rsquo;m a genius or something,
                            but let&rsquo;s be real—I&rsquo;m just your friendly
                            neighborhood front-end wizard or UI/UX sorcerer. I
                            spend my days turning chaotic ideas into something
                            that doesn&rsquo;t make you wanna gouge your eyes
                            out when you look at a screen.
                        </p>
                        <p className={aboutStyles.paragraph}>
                            I&rsquo;ve got ReactJS, HTML, CSS, and all that
                            “let&rsquo;s make the web pretty and functional”
                            stuff down. And if you think that&rsquo;s all,
                            I&rsquo;ve got a decent set of UI/UX design skills
                            too, &apos;cause why not make life harder by caring
                            about how things actually look? I mean, who
                            doesn&rsquo;t love combining art and logic while
                            dodging a nervous breakdown? Sure, I&rsquo;ve been
                            part of hackathons and projects that make me sound
                            all “driven” and “passionate”—and hey, some of
                            &apos;em have gone pretty well, while others, well,
                            not so much.
                        </p>
                        <p className={aboutStyles.paragraph}>
                            So, if you&rsquo;re looking for someone who gets the
                            job done with minimal sugar-coating, I&rsquo;m your
                            guy. It won&rsquo;t always be pretty (unless
                            we&rsquo;re talkin&apos; UI), but it&rsquo;ll be
                            functional, effective, and, dare I say, brilliant.
                        </p>
                    </div>
                </div>
            </div>
            <div className={aboutStyles.experience_container}>
                <ExperienceComponent />
            </div>
        </div>
    )
}

export default AboutComponent

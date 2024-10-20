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
                            Okay, so here’s where I’m supposed to convince you
                            that I’m a genius or something, but let’s be
                            real—I’m just your friendly neighborhood front-end
                            wizard or UI/UX sorcerer. I spend my days turning
                            chaotic ideas into something that doesn’t make you
                            wanna gouge your eyes out when you look at a screen.
                        </p>
                        <p className={aboutStyles.paragraph}>
                            I’ve got ReactJS, HTML, CSS, and all that “let’s
                            make the web pretty and functional” stuff down. And
                            if you think that’s all, I’ve got a decent set of
                            UI/UX design skills too, 'cause why not make life
                            harder by caring about how things actually look? I
                            mean, who doesn’t love combining art and logic while
                            dodging a nervous breakdown? Sure, I’ve been part of
                            hackathons and projects that make me sound all
                            “driven” and “passionate”—and hey, some of 'em have
                            gone pretty well, while others, well, not so much.
                        </p>
                        <p className={aboutStyles.paragraph}>
                            So, if you’re looking for someone who gets the job
                            done with minimal sugar-coating, I’m your guy. It
                            won’t always be pretty (unless we’re talkin' UI),
                            but it’ll be functional, effective, and, dare I say,
                            brilliant.
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

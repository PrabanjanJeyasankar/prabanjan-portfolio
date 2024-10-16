import aboutStyles from './AboutComponent.module.css'
import prabanjanImage from '../../assets/images/prabanjan_img.jpg'
import React from 'react'

function AboutComponent() {
    return (
        <div className={aboutStyles.container}>
            <h1 className={aboutStyles.title}>Me,Myself, and I</h1>
            <div className={aboutStyles.content}>
                <img
                    src={prabanjanImage}
                    alt='Daniel Bennett'
                    className={aboutStyles.image}
                />
                <div className={aboutStyles.textContent}>
                    <p className={aboutStyles.paragraph}>
                        Well, here’s the part where I’m supposed to convince you
                        that I’m a genius, but let’s be real—I’m just your
                        friendly neighborhood front-end wizard or UI/UX
                        sorcerer. I spend my days turning chaotic ideas into
                        something that doesn’t make you want to gouge your eyes
                        out when you look at a screen.
                    </p>
                    <p className={aboutStyles.paragraph}>
                        I've got ReactJS, HTML, CSS and the whole "let's make
                        the web pretty and functional" thing down. Oh, and if
                        you think that's all, I’ve got a decent set of UI/UX
                        design skills too, because why not make life harder by
                        caring about how things actually look? I mean, who
                        doesn’t love combining art and logic while dodging a
                        nervous breakdown? Sure, I’ve been part of hackathons
                        and projects that make me sound all "driven" and
                        "passionate"—and hey, some of them have gone pretty
                        well, while others not so much.
                    </p>
                    <p className={aboutStyles.paragraph}>
                        So, if you’re looking for someone who gets the job done
                        with a minimal amount of sugar-coating, I’m your guy. It
                        won’t always be pretty (unless it’s a UI), but it will
                        be functional, effective, and, dare I say, brilliant.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent

import React, { useEffect, useState } from 'react'
import heroStyles from './HeroComponent.module.css'
import HeroAppIconsComponent from '../../SupportComponents/HeroAppIconsComponent/HeroAppIconsComponent'
import ProjectComponent from '../ProjectComponent/ProjectComponent'
import HireMeComponent from '../../MainComponents/HireMeComponent/HireMeComponent'

function HeroComponent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className={heroStyles.hero_component_container}>
                <section
                    className={`${heroStyles.hero_section} ${
                        isVisible ? heroStyles.visible : ''
                    }`}>
                    <div className={heroStyles.availability}>
                        <span className={heroStyles.available_indicator}></span>
                        Available for freelance
                    </div>
                    <div className={heroStyles.hero_name}>
                        <h1 className={heroStyles.main_heading}>
                            Hey, I{'\u02BC'}m Prabanjan.
                        </h1>
                        <h2 className={heroStyles.main_heading}>
                            I{'\u02BC'}m a Designer & Developer.
                        </h2>
                    </div>
                    <p className={heroStyles.description}>
                        Unconventional Front-End Developer and UI/UX Designer
                        dedicated to crafting visually appealing and highly
                        functional digital experiences.
                    </p>
                    <HeroAppIconsComponent />
                </section>
                <ProjectComponent />
                <div className={heroStyles.hire_me_component}>
                    <HireMeComponent />
                </div>
            </div>
        </>
    )
}

export default HeroComponent

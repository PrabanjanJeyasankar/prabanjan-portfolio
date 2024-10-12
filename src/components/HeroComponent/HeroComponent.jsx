import React from 'react'
import heroStyles from './HeroComponent.module.css'
import HeroAppIconsComponent from '../HeroAppIconsComponent/HeroAppIconsComponent'

function HeroComponent() {
    return (
        <section className={heroStyles.hero_section}>
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
                Unconventional Front-End Developer and UI/UX Designer dedicated
                to crafting visually appealing and highly functional digital
                experiences.
            </p>
            <HeroAppIconsComponent />
        </section>
    )
}

export default HeroComponent

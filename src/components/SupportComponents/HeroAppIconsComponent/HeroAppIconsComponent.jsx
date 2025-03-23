import React from 'react'
import Marquee from 'react-fast-marquee'
import heroAppIconsStyles from './HeroAppIconsComponent.module.css'
import { appsIconForMarquee } from '../../../data/appIconsData'

function HeroAppIconsComponent() {
    return (
        <div className={heroAppIconsStyles.container}>
            <Marquee
                speed={10}
                gradient={true}
                gradientColor='black'
                gradientWidth={parseInt(
                    getComputedStyle(document.documentElement).getPropertyValue(
                        '--gradient-width'
                    )
                )}>
                {appsIconForMarquee.map((app, index) => (
                    <div
                        key={index}
                        className={heroAppIconsStyles.icon_wrapper}>
                        <div
                            className={`${heroAppIconsStyles.icon} ${
                                app.name === 'GitHub'
                                    ? heroAppIconsStyles.icon_github
                                    : ''
                            }`}>
                            <div className={heroAppIconsStyles.image_container}>
                                <img
                                    src={app.icon}
                                    alt={app.name}
                                    className={
                                        heroAppIconsStyles.app_icon_image
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default HeroAppIconsComponent

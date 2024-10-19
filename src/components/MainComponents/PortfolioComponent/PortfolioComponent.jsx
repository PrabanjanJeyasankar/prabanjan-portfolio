import React, { useEffect, useState } from 'react'
import portfolioStyles from './PortfolioComponent.module.css'
import ProjectComponent from '../ProjectComponent/ProjectComponent'

function PortfolioComponent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div
            className={`${portfolioStyles.portfolio_container} ${
                isVisible ? portfolioStyles.visible : ''
            }`}>
            <h1 className={portfolioStyles.portfolio_title}>
                Portfolio showcase
            </h1>
            <ProjectComponent />
        </div>
    )
}

export default PortfolioComponent

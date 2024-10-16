import React from 'react'
import portfolioStyles from './PortfolioComponent.module.css'
import ProjectComponent from '../ProjectComponent/ProjectComponent'

function PortfolioComponent() {
    return (
        <div className={portfolioStyles.portfolio_container}>
            <h1 className={portfolioStyles.portfolio_title}>
                Portfolio showcase
            </h1>
            <ProjectComponent/>
        </div>
    )
}

export default PortfolioComponent

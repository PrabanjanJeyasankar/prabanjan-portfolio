import React from 'react'
import hireMeStyles from './HireMeComponent.module.css'
import DownloadCVComponent from '../../SupportComponents/DownloadCVComponent/DownloadCVComponent'

function HireMeComponent() {
    return (
        <div className={hireMeStyles.container}>
            <h2 className={hireMeStyles.title}>Want to bring me on board?</h2>
            <p className={hireMeStyles.description}>
                Thinking of hiring? Let's design, develop, test, debug, review,
                deploy, and iterate.
                <span className={hireMeStyles.description_highlight}>
                    (And don't worry—I don't push .env to Git.)
                </span>
            </p>
            <div className={hireMeStyles.download_cv_button}></div>
            <DownloadCVComponent />
        </div>
    )
}

export default HireMeComponent

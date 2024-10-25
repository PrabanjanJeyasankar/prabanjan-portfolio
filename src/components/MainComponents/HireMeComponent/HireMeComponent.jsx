import React from 'react'
import hireMeStyles from './HireMeComponent.module.css'
import DownloadCVComponent from '../../SupportComponents/DownloadCVComponent/DownloadCVComponent'

function HireMeComponent() {
    return (
        <div className={hireMeStyles.container}>
            <h2 className={hireMeStyles.title}>Want to bring me on board?</h2>
            <p className={hireMeStyles.description}>
                Thinking of hiring? Let&apos;s design, develop, test, debug,
                review, deploy, and iterate.
                <span className={hireMeStyles.description_highlight}>
                    (And don&apos;t worry—I don&apos;t push .env to Git.)
                </span>
            </p>
            <DownloadCVComponent />
        </div>
    )
}

export default HireMeComponent

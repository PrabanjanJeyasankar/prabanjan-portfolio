import React from 'react'
import downloadCVStyles from './DownloadCVComponent.module.css'
import { ArrowUpRight } from 'lucide-react'

function DownloadCVComponent() {
    const handleRedirect = () => {
        const docLink =
            'https://docs.google.com/document/d/1WOoRMqaK4vsuLPcBcIj6_-bLPCeu7Qt6BAcPikRqnmc/edit?usp=sharing' // Replace with your document link
        window.open(docLink, '_blank')
    }

    return (
        <div className={downloadCVStyles.galaxy_button}>
            <button
                className={downloadCVStyles.space_button}
                onClick={handleRedirect} // Attach the redirect function to the button
            >
                <span className={downloadCVStyles.backdrop}></span>
                <span className={downloadCVStyles.galaxy}></span>
                <label className={downloadCVStyles.text}>
                    <span>Resume</span> <ArrowUpRight size={24} />
                </label>
            </button>
        </div>
    )
}

export default DownloadCVComponent

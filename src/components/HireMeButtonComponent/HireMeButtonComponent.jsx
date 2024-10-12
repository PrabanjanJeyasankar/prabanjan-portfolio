import React from 'react'
import button_styles from './HireMeButtonComponent.module.css'

function HireMeButtonComponent() {
    return (
        <button className={button_styles.button}>
            <div className={button_styles.dots_border}></div>
            <span className={button_styles.text_button}>Hire Me!</span>
        </button>
    )
}

export default HireMeButtonComponent

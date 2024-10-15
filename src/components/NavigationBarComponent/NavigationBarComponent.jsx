import React, { useState } from 'react'
import navBarStyles from './NavigationBarComponent.module.css'
import HireMeButtonComponent from '../HireMeButtonComponent/HireMeButtonComponent'
import profilePicture from '../../assets/images/prabanjan_pfp.jpg'

function NavigationBarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <header className={`${navBarStyles.header} ${navBarStyles['offset-20']}`}>
            <div className={navBarStyles.logo}>
                <img
                    src={profilePicture}
                    alt='Avatar'
                    className={navBarStyles.avatar}
                />
                <div className={navBarStyles.name_and_title}>
                    <div className={navBarStyles.name}>
                        Prabanjan Jeyasankar.
                    </div>
                    <div className={navBarStyles.title}>
                        Designer & Developer
                    </div>
                </div>
            </div>

            <div
                className={`${navBarStyles.hamburger} ${
                    isMenuOpen ? navBarStyles.active : ''
                }`}
                onClick={toggleMenu}>
                <span className={navBarStyles.line}></span>
                <span className={navBarStyles.line}></span>
            </div>

            <nav
                className={`${navBarStyles.navigation_bar} ${
                    isMenuOpen ? navBarStyles.show : ''
                }`}>
                <a
                    href='#'
                    className={`${navBarStyles.link} ${navBarStyles.activeLink}`}>
                    Home
                </a>
                <a href='#' className={navBarStyles.link}>
                    Portfolio
                </a>
                <a href='#' className={navBarStyles.link}>
                    About
                </a>
                <HireMeButtonComponent />
            </nav>
        </header>
    )
}

export default NavigationBarComponent

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navBarStyles from './NavigationBarComponent.module.css'
import HireMeButtonComponent from '../../SupportComponents/HireMeButtonComponent/HireMeButtonComponent'
import profilePicture from '../../../assets/images/prabanjan_pfp.jpg'

function NavigationBarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header
            className={`${navBarStyles.header} ${navBarStyles['offset-20']}`}>
            <Link to='/' className={navBarStyles.logo}>
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
            </Link>

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
                <Link
                    to='/'
                    className={`${navBarStyles.link} ${navBarStyles.activeLink}`}
                    onClick={handleCloseMenu}>
                    Home
                </Link>
                <Link
                    to='/portfolio'
                    className={navBarStyles.link}
                    onClick={handleCloseMenu}>
                    Portfolio
                </Link>
                <Link
                    to='/about'
                    className={navBarStyles.link}
                    onClick={handleCloseMenu}>
                    Me
                </Link>
                <Link
                    to='/contact'
                    className={navBarStyles.link}
                    onClick={handleCloseMenu}>
                    <HireMeButtonComponent />
                </Link>
            </nav>
        </header>
    )
}

export default NavigationBarComponent

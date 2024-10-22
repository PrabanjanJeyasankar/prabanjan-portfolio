import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import navBarStyles from './NavigationBarComponent.module.css'
import HireMeButtonComponent from '../../SupportComponents/HireMeButtonComponent/HireMeButtonComponent'
import profilePicture from '../../../assets/images/prabanjan_pfp.jpg'
import Scrollbar from 'smooth-scrollbar'

function NavigationBarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navbarRef = useRef(null)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const scrollbar = Scrollbar.init(document.body, {
            damping: 0.03,
        })

        const updateNavbarPosition = () => {
            if (navbarRef.current) {
                const offset = scrollbar.offset.y
                navbarRef.current.style.top = `${Math.max(10, offset + 22)}px`
            }
        }

        // Listen to scroll events
        scrollbar.addListener(updateNavbarPosition)
        return () => {
            scrollbar.removeListener(updateNavbarPosition)
            Scrollbar.destroy(scrollbar)
        }
    }, [])

    return (
        <header ref={navbarRef} className={navBarStyles.header}>
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

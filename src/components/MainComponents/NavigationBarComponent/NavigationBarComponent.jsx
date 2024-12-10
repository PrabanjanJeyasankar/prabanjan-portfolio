import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import navBarStyles from './NavigationBarComponent.module.css'
import HireMeButtonComponent from '../../SupportComponents/HireMeButtonComponent/HireMeButtonComponent'
import profilePicture from '../../../assets/images/prabanjan_pfp.webp'
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
            damping: 0.08,
            renderByPixels: true,
            overscrollDamping: 0.5,
        })

        const updateNavbarPosition = () => {
            if (navbarRef.current) {
                const offset = scrollbar.offset.y
                navbarRef.current.style.top = `${Math.max(0, offset)}px`
            }
        }

        scrollbar.addListener(updateNavbarPosition)
        return () => {
            scrollbar.removeListener(updateNavbarPosition)
            Scrollbar.destroy(scrollbar)
        }
    }, [])

    const handleKeyDown = (event, toggleMenu) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu()
        }
    }

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

            <button
                className={`${navBarStyles.hamburger} ${
                    isMenuOpen ? navBarStyles.active : ''
                }`}
                onClick={toggleMenu}
                onKeyDown={(event) => handleKeyDown(event, toggleMenu)}
                aria-expanded={isMenuOpen}
                aria-label='Toggle navigation menu'>
                <span className={navBarStyles.line} />
                <span className={navBarStyles.line} />
            </button>

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

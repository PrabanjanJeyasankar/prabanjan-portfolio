import React, { useEffect, useState } from 'react'
import footerStyles from './FooterComponent.module.css'
import twitterIcon from '../../../assets/images/social-icons/X.png'
import linkedinIcon from '../../../assets/images/social-icons/linkedIn.png'
import instagramIcon from '../../../assets/images/social-icons/instagram.png'
import gitHubIcon from '../../../assets/images/social-icons/github.png'

function FooterComponent() {
    const [time, setTime] = useState(new Date())

    function Icon({ name, url }) {
        const icons = {
            twitter: twitterIcon,
            linkedin: linkedinIcon,
            instagram: instagramIcon,
            gitHub: gitHubIcon,
        }

        return (
            <a href={url} target='_blank' rel='noopener noreferrer'>
                <img
                    src={icons[name]}
                    alt={name}
                    className={footerStyles.icon}
                />
            </a>
        )
    }

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.left_section}>
                <span className={footerStyles.footer_text}>Designed by</span>
                <span className={footerStyles.designer_name}>
                    Prabanjan Jeyasankar
                </span>
                <span className={footerStyles.footer_year}>© 2024.</span>
            </div>

            <div className={footerStyles.footer_clock}>
                <span className={footerStyles.clock}>
                    {time.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true,
                    })}
                </span>
            </div>

            <div className={footerStyles.right_section}>
                <div className={footerStyles.icons}>
                    <Icon name='twitter' url='https://x.com/PrabanjanJ' />
                    <Icon
                        name='linkedin'
                        url='https://www.linkedin.com/in/prabanjanjeyasankar/'
                    />
                    <Icon
                        name='instagram'
                        url='https://www.instagram.com/prabanjan_jeyasankar/'
                    />
                    <Icon
                        name='gitHub'
                        url='https://github.com/PrabanjanJeyasankar/prabanjan-portfolio'
                    />
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './social-menu.scss'

library.add(fab);

export default () => {
    const socialLinks = [
        {link: 'https://www.facebook.com/SeventaEvents/', icon: 'facebook-f', label: "Facebook link"},
        {link: 'https://www.instagram.com/seventaevents/', icon: 'instagram', label: "Instagram link"},
        {link: 'https://linkedin.com/company/seventa-events/', icon: 'linkedin-in', label: "Linkedin link"},
        {link: 'https://twitter.com/SeventaEvents', icon: 'twitter', label: "Twitter link"},
    ];

    return (
        <ul className="social-links__menu">
        {
            socialLinks.map((item, index) => {
                const { link, icon, label } = item;
            return (
                    <li key={index}>
                        <a
                            href={link}
                            className="social-link"
                            aria-label={label}
                        >
                            <FontAwesomeIcon icon={['fab', icon]}/>
                        </a>
                    </li>
                )
            })
        }
        </ul>
    )
}
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Link } from 'gatsby'

import './site-brand.scss'
import Logo from '../../images/seventa-dark-logo.svg'

export default () => (
    <AniLink to="/" className="site-brand" direction="up" bg="#FFFFFF" aria-label="Seventa">
        <Logo style={{
            display: 'block',
            width: '100%',
            height: 'auto',
        }}/>
    </AniLink>
)
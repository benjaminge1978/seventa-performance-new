import React from 'react'

import { Link } from 'gatsby'

import './site-brand.scss'
import Logo from '../../images/seventa-dark-logo.svg'

export default () => (
    <Link to="/" className="site-brand" aria-label="Seventa">
        <Logo style={{
            display: 'block',
            width: '100%',
            height: 'auto',
        }}/>
    </Link>
)
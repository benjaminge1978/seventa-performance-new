import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LinkItem = ({ external, href, children, ...props }) => {
    const itemCLass = `menu-link ${(props.className ? ` ${props.className}` : '')}`;

    return (
        true === external
        ? <a className={`${itemCLass} external`} href={href}>{children}</a>
        : <AniLink activeClassName={props.activeClassName} className={itemCLass} cover to={'/' + href} direction="up" bg="#FFF">{children}</AniLink>
    )
};

LinkItem.defaultProps = {
    external: false,
    href: '#',
    text: '',
    activeClassName: 'active',
};

LinkItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    external: PropTypes.bool,
    activeClassName: PropTypes.string,
};

export default LinkItem;
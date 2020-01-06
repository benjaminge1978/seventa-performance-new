import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const LinkItem = ({ external, href, children, ...props }) => {
    const itemCLass = `menu-link ${(props.className ? ` ${props.className}` : '')}`;

    return (
        true === external
        ? <a className={`${itemCLass} external`} href={href}>{children}</a>
        : <Link activeClassName={props.activeClassName} className={itemCLass} to={'/' + href}>{children}</Link>
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
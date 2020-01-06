import React from "react"
import PropsTypes from "prop-types"

import "./page-heading.scss"

const PageHeading = props => {
    const className = 'page-heading' + ( 'undefined' !== typeof props.className ? ` ${props.className}` : '');

    return (
        <div className={className}>
            <div className="page-heading__inner">
                <h3 className="page-heading__name">{props.pageName}</h3>
                <h1 className="page-heading__title">{props.pageTitle}</h1>
                {
                    props.description
                    ? <div className="page-heading__description" dangerouslySetInnerHTML={{__html: props.description}} />
                    : null
                }
                {props.children}
            </div>
        </div>
    );
};

PageHeading.propsTypes = {
    pageName: PropsTypes.string.isRequired,
    pageTitle: PropsTypes.string.isRequired,
    description: PropsTypes.string,
};

export default PageHeading;
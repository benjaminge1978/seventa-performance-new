import React from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import PropsTypes from "prop-types";
import Arrow from "../../images/case-study-arrow.svg";

import "./case.scss";

export default class Case extends React.Component {
    render() {
        const { index, thumbDesc, title,category, slug, fluidImg } = this.props;
        const itemClasses = index % 2 === 0 ? 'left' : 'right';
        const caseSlug = `/${slug}`;

        return (
            <div className={`cases-item cases-item--${itemClasses} cases-item--${index + 1}`} ref={this.triggerElement}>
                        <AniLink to={caseSlug} className="cases-item__thumb">
                            <Img fluid={fluidImg.fluid} alt={fluidImg.title} loading="lazy" className="animated-img"/>
                            {
                                thumbDesc
                                    ? <span className="cases-item__description">{thumbDesc}</span>
                                    : null
                            }
                        </AniLink>
                        <div className="cases-item__heading">
                            <span className="case-heading-arrow"><Arrow /></span>
                            <div className="case-heading-text">
                                <p>{category}</p>
                                <h3><AniLink className="animated-link" cover to={caseSlug} direction="up" bg="#FFFFFF">{title}</AniLink></h3>
                            </div>
                        </div>
            </div>
        )
    }
}

Case.propTypes = {
    fluidImg: PropsTypes.object.isRequired,
    category: PropsTypes.string.isRequired,
    thumbDesc: PropsTypes.string,
    index: PropsTypes.number.isRequired,
    slug: PropsTypes.string.isRequired,
};

Case.defaultProps = {
    thumbDesc: ''
};
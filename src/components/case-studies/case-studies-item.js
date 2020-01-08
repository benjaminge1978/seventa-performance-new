import React from "react";
import { Link } from "gatsby";
import PropsTyps from "prop-types";
import Img from "gatsby-image";
import Arrow from "../../images/arrow-right.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const CaseStudiesItem = ({ title, thumbSrc, slug, excerpt, thumb }) => {
    const itemLink = `/${slug}`;
    
    return (
        <div className="case-studies-list-item">
            <AniLink cover to={itemLink} direction="up" bg="#FFFFFF" className="case-studies-list-item__thumb">
                <Img
                    fluid={thumb.fluid}
                    alt={thumb.title}
                    loading="lazy"
                    className="animated-img"
                />
            </AniLink>
            <h2 className="case-studies-list-item__title"><AniLink to={itemLink} className="animated-link">{title}</AniLink></h2>
            <div className="case-studies-list-item__excerpt" dangerouslySetInnerHTML={{__html: excerpt}} />
            <AniLink cover to={itemLink} direction="up" bg="#FFFFFF"><Arrow /></AniLink>
        </div>
    );
};

CaseStudiesItem.porpsTypes = {
    title: PropsTyps.string.isRequired,
    thumbSrc: PropsTyps.string.isRequired,
    thumb: PropsTyps.string.isRequired,
    excerpt: PropsTyps.string.isRequired,
    slug: PropsTyps.string.isRequired,
};

export default CaseStudiesItem;
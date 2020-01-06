import React from "react";
import { Link } from "gatsby";
import PropsTyps from "prop-types";
import Img from "gatsby-image";
import Arrow from "../../images/arrow-right.svg";

const CaseStudiesItem = ({ title, thumbSrc, slug, excerpt, thumb }) => {
    const itemLink = `/${slug}`;
    
    return (
        <div className="case-studies-list-item">
            <Link to={itemLink} className="case-studies-list-item__thumb">
                <Img
                    fluid={thumb.fluid}
                    alt={thumb.title}
                    loading="lazy"
                    className="animated-img"
                />
            </Link>
            <h2 className="case-studies-list-item__title"><Link to={itemLink} className="animated-link">{title}</Link></h2>
            <div className="case-studies-list-item__excerpt" dangerouslySetInnerHTML={{__html: excerpt}} />
            <Link to={itemLink}><Arrow /></Link>
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
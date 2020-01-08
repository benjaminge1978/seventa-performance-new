import React from "react";
import PropsTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../../../images/arrow-right.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";


const BlogPostPreview = ({ title, excerpt, thumb, date, slug }) => {
    return (
        <div className="blog-post-preview">
            <AniLink cover to={`/blog/${slug}`} direction="up" bg="#FFFFFF" className="blog-post-preview__thumb">
                <Img
                    fluid={thumb.fluid}
                    alt={thumb.title}
                    loading="lazy"
                    className="animated-img"
                />
            </AniLink>
            <p className="blog-post-preview__date">{date}</p>
            <h2 className="blog-post-preview__title">
                <AniLink to={`/blog/${slug}`} className="animated-link">
                    {title}
                </AniLink>
            </h2>
            <p className="blog-post-preview__excerpt">{excerpt}</p>
            <Arrow />
        </div>
    );
};

BlogPostPreview.propTypes = {
    title: PropsTypes.string.isRequired,
    excerpt: PropsTypes.string.isRequired,
    thumb: PropsTypes.object.isRequired,
    date: PropsTypes.string.isRequired,
    slug: PropsTypes.string.isRequired,
};

export default BlogPostPreview;
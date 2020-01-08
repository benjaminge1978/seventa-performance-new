import React from "react"
import PropsTypes from "prop-types"
import { Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../../../images/case-study-arrow.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";


import './case-item.scss'

const CaseItem = ({ slug, categories, caseTitle, thumbnail }) => (
    <div className="case-category__item">
        <AniLink cover to={`/${slug}`} direction="up" bg="#FFFFFF">
            <Img
                fluid={thumbnail.fluid}
                alt={thumbnail.title}
                loading="lazy"
                className="animated-img"
            />
        </AniLink>
        <div className="case-category-item-desc">
            <Arrow />
            <div className="case-category-item-heading">
                {
                    categories
                        ? <p>
                            {
                                categories
                                    .map(category => category.name.toLowerCase())
                                    .join(" & ")
                            }
                        </p>
                        : null
                }
                <h2><AniLink className="animated-link" cover to={`/${slug}`} direction="up" bg="#FFFFFF">{caseTitle}</AniLink></h2>
            </div>
        </div>
    </div>
);

CaseItem.propTypes = {
    slug: PropsTypes.string.isRequired,
    thumbnail: PropsTypes.object.isRequired,
    caseTitle: PropsTypes.string.isRequired,
    categories: PropsTypes.array.isRequired,
};

export default CaseItem
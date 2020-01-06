import React from "react"
import PropsTypes from "prop-types"
import { Link } from "gatsby";
import Img from "gatsby-image";
import Arrow from "../../../images/case-study-arrow.svg";

import './case-item.scss'

const CaseItem = ({ slug, categories, caseTitle, thumbnail }) => (
    <div className="case-category__item">
        <Link to={`/${slug}`}>
            <Img
                fluid={thumbnail.fluid}
                alt={thumbnail.title}
                loading="lazy"
                className="animated-img"
            />
        </Link>
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
                <h2><Link className="animated-link" to={`/${slug}`}>{caseTitle}</Link></h2>
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
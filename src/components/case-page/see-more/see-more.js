import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"
import Arrow from "../../../images/arrow-left.svg";
import CaseItem from "../../case-category/case-item/case-item";
import AniLink from "gatsby-plugin-transition-link/AniLink";


import "./see-more.scss"

const SeeMore = ({cases, category}) => {
    return (
        <div className="related-cases">
            <div className="related-cases__heading">
                <AniLink cover to={`/${category.slug}`} direction="up" bg="#FFFFFF"><Arrow />Back to {category.name.toLowerCase()} case studies</AniLink>
                <h3>See more {category.name}</h3>
            </div>
            <div className="related-cases__list">
                {
                    cases.map((node, index) => (
                        <CaseItem
                            key={index}
                            thumbnail={node.thumbnail}
                            caseTitle={node.title}
                            categories={node.caseCategories}
                            slug={node.slug}
                        />
                        ))
                }
            </div>
        </div>
    );
};

SeeMore.propTypes = {
    cases: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.shape({
            fluid: PropTypes.shape({
                src: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        caseCategories: PropTypes.array.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
};

export default SeeMore;
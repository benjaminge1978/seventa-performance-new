import React from "react";
import { graphql, Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Arrow from "../images/arrow-down.svg";
import CaseStudiesItem from "../components/case-studies/case-studies-item";

import "./scss/case-studies.scss";

export default ({data}) => {
    const categories = data.allContentfulCaseCategory.nodes;

    return (
        <Layout className="case-studies-page">
            <SEO title="Case Studies"/>
            <PageHeading
                pageName="Case Studies"
                pageTitle="Here is the title about the portfolio"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
            >
                <ul className="case-studies-heading-links">
                    <li><AniLink cover to="/brand-activation" direction="up" bg="#FFFFFF">Brand activation</AniLink></li>
                    <li><AniLink cover to="/conferences" direction="up" bg="#FFFFFF">Conferences</AniLink></li>
                    <li><AniLink cover to="/event-production"direction="up" bg="#FFFFFF">Event production</AniLink></li>
                    <li><AniLink cover to="/event-management"direction="up" bg="#FFFFFF">Event management</AniLink></li>
                    <li><AniLink cover to="/venue-sourcing"direction="up" bg="#FFFFFF">Venue sourcing</AniLink></li>
                </ul>
            </PageHeading>
            {
                categories
                ?   <ContainerLabelled label={<Arrow />} className="case-studies-section" >
                        <div className="case-studies-list">
                            {
                                categories.map((category, index) => (
                                    <div className="case-studies-category" key={index}>
                                        <CaseStudiesItem
                                            title={category.name}
                                            thumb={category.image}
                                            excerpt={category.description.childContentfulRichText.html}
                                            slug={category.slug}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </ContainerLabelled>
                : null
            }
        </Layout>
    );
}

export const query = graphql`
    query CaseCategoriesQueryOut {
        allContentfulCaseCategory {
            nodes {
                name
                slug
                image {
                    title
                    fluid(quality: 100, maxWidth: 1200) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                }
                description {
                    childContentfulRichText {
                        html
                    }
                }
            }
        }
    }
`;
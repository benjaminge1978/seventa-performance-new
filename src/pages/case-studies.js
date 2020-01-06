import React from "react";
import { graphql, Link } from "gatsby";
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
                    <li><Link to="/brand-activation">Brand activation</Link></li>
                    <li><Link to="/conferences">Conferences</Link></li>
                    <li><Link to="/event-production">Event production</Link></li>
                    <li><Link to="/event-management">Event management</Link></li>
                    <li><Link to="/venue-sourcing">Venue sourcing</Link></li>
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
                    fluid(quality: 50, maxWidth: 700) {
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
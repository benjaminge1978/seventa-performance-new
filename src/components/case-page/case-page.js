import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../layout";
import SEO from "../seo";
import SeeMore from "./see-more/see-more";
import PageHeading from "../page-heading/page-heading";
import ContainerLabelled from "../container-labelled/container-labelled";
import SectionHeading from "../section-heading/section-heading";
import LongDashText from "../long-dash-text/long-dash-text";
import Arrow from "../../images/arrow-left.svg";
import Img from "gatsby-image";

import "./case-page.scss";

const CasePage = ({data}) => {
    const caseItem = data.contentfulCases,
        category = caseItem.caseCategories ? caseItem.caseCategories[0] : null,
        seeMoreNodes = data.allContentfulCases.nodes,
        { bigImage, thumbnail, services, title, imagesRow, section1Subtitle, section1Title, section1Content, section2Subtitle, section2Title, section2Content, section3Subtitle, section3Title, section3Content, section3Image } = caseItem;

    return (
        <Layout className="case-page-layout">
            <SEO title={caseItem.title} />
            <div className="case-item">
                <PageHeading
                    pageName={category.name}
                    pageTitle={title}
                    className="case-item__heading"
                >
                    {
                        services && services.hasOwnProperty('services')
                        ?   <div className="services-list">
                                <p className="service-title">Service</p>
                                <ul>{services.services.split("\n").map((service, index) => service ? <li key={index}>{service}</li> : null)}</ul>
                            </div>
                        : null
                    }
                </PageHeading>
                {
                    'undefined' !== typeof thumbnail.fluid
                        ?   <ContainerLabelled label={<Link to={category.slug}><Arrow /></Link>} className="case-page-thumbnail">
                            <Img fluid={thumbnail.fluid} alt={thumbnail.title} loading="lazy" className="animated-img" />
                        </ContainerLabelled>
                    : null
                }

                {
                    section1Subtitle && section1Title && section1Content
                    ?   <div className="case-page-text-1">
                            <SectionHeading
                                sectionName={section1Subtitle}
                                sectionTitle={section1Title}
                            >
                                <LongDashText>
                                    <div dangerouslySetInnerHTML={{__html: section1Content.childContentfulRichText.html}} />
                                </LongDashText>
                            </SectionHeading>
                        </div>
                    : null
                }

                {
                    imagesRow && imagesRow.length
                    ?   <div className="case-page-images-row">
                            {
                                imagesRow.map((image, index) => (
                                    <div key={index} className="case-page-images-row__item">
                                        <Img fluid={image.fluid} alt={image.title} loading="lazy" className="animated-img" />
                                    </div>
                                ))
                            }
                        </div>
                    : null
                }

                {
                    section2Subtitle && section2Title && section2Content
                        ?   <div className="case-page-text-2">
                                <SectionHeading
                                    sectionName={section2Subtitle}
                                    sectionTitle={section2Title}
                                >
                                    <LongDashText>
                                        <div dangerouslySetInnerHTML={{__html: section2Content.childContentfulRichText.html}} />
                                    </LongDashText>
                                </SectionHeading>
                            </div>
                        : null
                }

                {
                    bigImage
                    ?   <ContainerLabelled className="case-page-big-image">
                            <div className="case-page-big-image__wrapper">
                                <Img
                                    fluid={bigImage.fluid}
                                    alt={bigImage.title}
                                    className="animated-img"
                                />
                            </div>
                        </ContainerLabelled>
                    : null
                }

                {
                    section3Subtitle && section3Title && section3Content && section3Image
                    ?   <div className="case-page-text-3">
                            <div className="case-page-text-3__image">
                                <Img fluid={section3Image.fluid} alt={section3Image.title} loading="lazy" className="animated-img" />
                            </div>
                            <div className="case-page-text-3__content">
                                <SectionHeading
                                    sectionName={section3Subtitle}
                                    sectionTitle={section3Title}
                                >
                                    <LongDashText>
                                        <div dangerouslySetInnerHTML={{__html: section3Content.childContentfulRichText.html}} />
                                    </LongDashText>
                                </SectionHeading>
                            </div>
                        </div>
                    : null
                }

                {
                    seeMoreNodes && seeMoreNodes.length
                    ?   <ContainerLabelled className="section--see-more">
                            <SeeMore
                                cases={seeMoreNodes}
                                category={category}
                            />
                        </ContainerLabelled>
                    : null
                }
            </div>
        </Layout>
    );
};

export const query = graphql`
    query CaseQuery($id: String, $categoryID: String) {
        allContentfulCases(filter: {caseCategories: {elemMatch: {id: {eq: $categoryID}}}, id: {ne: $id}}, limit: 3) {
            nodes {
                slug
                title
                thumbnail {
                    fluid(maxWidth: 600) {
                        base64
                        sizes
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                    }
                    title
                }
                caseCategories {
                    name
                    slug
                }
            }
        }
        contentfulCases(id: {eq: $id}) {
            title
            thumbnail {
                fluid(maxWidth: 1600, quality: 80) {
                    srcSet
                    src
                    srcSetWebp
                    srcWebp
                    sizes
                    base64
                }
            }
            caseCategories {
                categoryTitle
                slug
                name
            }
            thumb_excerpt
            services {
                services
            }
            imagesRow {
                fluid(quality: 80, maxWidth: 600) {
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                }
                title
            }
            section1Title
            section2Subtitle
            section2Title
            section3Subtitle
            section3Title
            section3Content {
                childContentfulRichText {
                    html
                }
            }
            section2Content {
                childContentfulRichText {
                    html
                }
            }
            section3Image {
                fluid(maxWidth: 680,quality: 80) {
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                }
                title
            }
            bigImage {
                fluid(maxWidth: 1300, quality: 80) {
                    base64
                    sizes
                    src
                    srcSet
                    srcSetWebp
                    srcWebp
                }
                title
            }
            section1Content {
                childContentfulRichText {
                    html
                }
            }
            section1Subtitle
            content {
                childContentfulRichText {
                    html
                }
            }
        }
    }
`;

export default CasePage;
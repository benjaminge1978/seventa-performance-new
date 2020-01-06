import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import SEO from "../seo";
import ContainerLabelled from "../container-labelled/container-labelled";
import PageHeading from "../page-heading/page-heading";
import CaseItem from "./case-item/case-item";
import Testimonial from "./testimonial/testimonial";
import Arrow from "../../images/arrow-down.svg";

import "./case-category.scss";

export default ({data}) => {
    console.log(data);
    const category = data.contentfulCaseCategory;
    const testimonial = category.testimonials ? category.testimonials[0] : null;

    return (
        <Layout className="case-category">
            <SEO title={category.name}/>
            <PageHeading
                pageName={category.name}
                pageTitle={category.categoryTitle}
                description={category.childContentfulCaseCategoryDescriptionRichTextNode.childContentfulRichText.html}
            />
            {
                category.cases && category.cases.length
                ?   <ContainerLabelled label={<Arrow />} className="category-page-cases--wrapper">
                        <div className="category-page-cases">
                            {
                                category.cases.map((caseItem, index) => (
                                    <CaseItem
                                        key={index}
                                        slug={caseItem.slug}
                                        thumbnail={caseItem.thumbnail}
                                        caseTitle={caseItem.title}
                                        categories={caseItem.caseCategories}
                                    />)
                                )
                            }
                        </div>
                    </ContainerLabelled>
                : null
            }
            {
                testimonial
                    ? <ContainerLabelled className="testimonial-section" label={<span className="testimonial-label">Testimonial </span>}>
                        <Testimonial
                            author={testimonial.author}
                            text={testimonial.childContentfulTestimonialsTextRichTextNode.childContentfulRichText.html}
                        />
                    </ContainerLabelled>
                    : null
            }
        </Layout>
    );
}

export const query = graphql`
    query CaseCategoryQuery($id: String) {
        contentfulCaseCategory(id: {eq: $id}, testimonials: {elemMatch: {bindToCategory: {id: {eq: $id}}}}) {
            cases {
                id
                title
                slug
                thumbnail {
                    title
                    fluid(maxWidth: 600) {
                        base64
                        sizes
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                    }
                }
                caseCategories {
                    slug
                    name
                }
            }
            id
            name
            slug
            categoryTitle
            childContentfulCaseCategoryDescriptionRichTextNode {
                childContentfulRichText {
                    html
                }
            }
            testimonials {
                author
                childContentfulTestimonialsTextRichTextNode {
                    childContentfulRichText {
                        html
                    }
                }
            }
        }
    }
`;
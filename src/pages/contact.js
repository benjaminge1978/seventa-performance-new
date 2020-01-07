import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Arrow from "../images/arrow-down.svg";
import OfficeLocation from "../components/footer/greybox/offices/offices";
import ContactForm from "../components/contact/form/form";

import "./scss/contact.scss";

export default ({ data }) => {
    const { childImageSharp, name } = data.file;

    return (
        <Layout className="contact-page">
            <SEO title="Contact"/>
            <PageHeading
                pageName="Contact us"
                pageTitle="We would love to hear from you."
                description="Get in touch with the team to discuss how we can help with your project."
                className="contact-page-heading"
            />
            <ContainerLabelled
                className="contact-page-darkgrey"
                label={<Arrow aria-hidden={true} />}
            >
                <figure>
                    <Img fluid={childImageSharp.fluid} alt={name} loading="lazy" className="animated-img" />
                </figure>
                <div className="contact-data">
                    <h3><a href="mailto:info@seventa.co.uk">E: info@seventa.co.uk</a></h3>
                    <h3><a href="tel:00441202237433">T: 1202 237 433</a></h3>
                    <OfficeLocation />
                </div>
            </ContainerLabelled>
            <ContainerLabelled className="contact-page-form-section">
                <h3>Set up a phone call</h3>
                <ContactForm />
            </ContainerLabelled>
        </Layout>
    );
}

export const query = graphql`
    query ContactPageImage {
        file(relativePath: {eq: "seventa-about-us-header-image.jpg"}) {
            publicURL
            name
            childImageSharp {
                fluid(maxWidth: 1800, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
    }

`;
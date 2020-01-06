import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const image = useStaticQuery(graphql`
        query BrandActivationImage {
            file(relativePath: {eq: "services/brand-activation.jpg"}) {
                childImageSharp {
                    fluid(quality: 85) {
                        srcSet
                        srcSetWebp
                        srcWebp
                        src
                        base64
                        sizes
                        tracedSVG
                        presentationHeight
                        presentationWidth
                        aspectRatio
                        originalImg
                        originalName
                    }
                }
                name
            }
        }
    `);

    return <Img fluid={image.file.childImageSharp.fluid} alt={image.file.name} className="animated-img" />
}
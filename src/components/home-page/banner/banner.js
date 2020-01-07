import React from "react";
import {gsap, TimelineMax} from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import SplitText from "gsap/SplitText";
import Img from "gatsby-image";
import Arrow from "../../../images/arrow-down.svg"
import Video from '../banner/video/video'

import "./banner.scss"

export default () => {
    const bannerImage = useStaticQuery(graphql`
        query BannerImage {
            file(relativePath: {eq: "seventa-header.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                }
                name
            }
        }
    `);

    return (
      <div className="banner-section">
        <div className="banner-section__left">
          <Arrow/>
        </div>
        <div className="banner-section__inner">
          <h1 className="banner-text">
            <span>We love experiences.</span>
            <span>We create them.</span>
          </h1>
          <Video />
          {
            bannerImage.errors
              ? null
              : <Img
                  fluid={bannerImage.file.childImageSharp.fluid}
                  alt={bannerImage.file.childImageSharp.name}
                />
          }
        </div>
      </div>
    );
}

gsap.registerPlugin(TimelineMax, SplitText);
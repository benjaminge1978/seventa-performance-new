import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";
import SectionHeading from "../components/section-heading/section-heading";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Arrow from "../images/arrow-down.svg";
import LongDashText from "../components/long-dash-text/long-dash-text";
import TeamMember from "../components/team-member/team-member";
import PromoImage from "../components/about-page/promo";
import Image1 from "../components/about-page/image-1";
import Image2 from "../components/about-page/image-2";

import "./scss/about.scss";

export default ({ data }) => {
    const members = data.allContentfulTeamMember.nodes;

    return (
        <Layout className="about-page-layout">
            <SEO title="About us"/>
            <PageHeading
                pageName="Welcome to Seventa Events!"
                pageTitle="A mighty team, specialising in all things events."
                description="Founded in 2011 by Simon Brooks, Seventa was built from a drive of enthusiasm for the industry of likeminded people, out of a garden shed. Seventa now have hubs in London and Bournemouth respectively. 
                "
            />
            <ContainerLabelled label={<Arrow />} className="about-page-promo" innerClassName="about-page-promo__inner" labelClassName="about-page-promo__label">
                <PromoImage />
            </ContainerLabelled>
            <ContainerLabelled className="about-page-text about-page-text--blue">
                <h3>About us</h3>
                <LongDashText className="first-dash">
                    <p>Fast forward to today and here we are, known for our personality, experience and creativity, designing events and experiences that we know will leave a lasting impression.</p>
                </LongDashText>
            </ContainerLabelled>
            <div className="about-page-images">
                <div className="about-page-images__item">
                    <Image1 />
                </div>
                <div className="about-page-images__item">
                    <Image2 />
                </div>
            </div>
            <ContainerLabelled className="about-page-text about-page-text--grey" innerClassName="light-bg">
                <p className="light-text">From Humble begginings</p>
                <h2>You’ll be pleased to hear that we’ve moved on from the shed…</h2>
                <LongDashText>
                    <p>Our offices are now conjoined to a 26,000 ft square warehouse stocked floor to ceiling with event hire equipment provided by our sister company Innovative Hire. 

As a team we love what we do and are passionate about our work. Creativity and organisation sit hand in hand with us. We are extremely proud of our client base, having retained clients from day one, whilst welcoming exciting and upcoming global brands.</p>
                </LongDashText>
            </ContainerLabelled>
            {
                members && members.length
                ?   <div className="team-members-section">
                        <SectionHeading
                            sectionName="The team"
                            sectionTitle="Meet the team"
                        />
                        <ContainerLabelled label={<span className="team-members-section__label">The team ———</span>}>
                            <div className="team-members-list">
                                {
                                    members.map((member, index) => (
                                        <div className="team-members-list__item" key={index}>
                                            <TeamMember
                                                name={member.name}
                                                position={member.position}
                                                photo={member.photo.fluid}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </ContainerLabelled>
                    </div>
                : null
            }
        </Layout>
    );
}

export const query = graphql`
    query Members {
        allContentfulTeamMember {
            nodes {
                name
                photo {
                    title
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyContentfulFluid_withWebp_noBase64
                    }
                }
                position
            }
        }
    }
`;
import React from "react";
import { Link } from "gatsby";
import Arrow from "../../../../src/images/arrow-right.svg";
import BrandActivationImage from "./brand-activation-image";
import ConferencesImage from "./conferences-image";
import EventProductionImage from "./event-producton-image";
import EventManagementImage from "./event-management-image";
import VenueSourcingImage from "./venue-sourcing-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./services.scss";

export default () => (
    <div className="services-section">
        <div className="services-heading">
            <h2>Services</h2>
            <div className="experience">
                <span className="experience__years">7 years of<br /> experience</span>
                <span className="experience__dash">————</span>
                <span className="experience__text">
                        <p>It’s no secret that the ‘Events’ industry is a huge field by any measure. Our portfolio of work includes, event design, management and production for global brands, private clients and corporate companies. </p>
                    </span>
            </div>
        </div>
        <div className="services-cards">
            <div className="services-cards__item">
                <AniLink cover to="/brand-activation">
                    <BrandActivationImage />
                </AniLink>
                <h3><AniLink cover to="/brand-activation" direction="up" bg="#FFF">Brand activation</AniLink></h3>
                <p>On trend, flexible, and the perfect opportunity for some experiential marketing, we work closely with brands to produce unique experiences for consumers.</p>
                <AniLink to="/brand-activation" direction="up" bg="#FFF"><Arrow /></AniLink>
            </div>
            <div className="services-cards__item">
                <AniLink cover to="/conferences">
                    <ConferencesImage />
                </AniLink>
                <h3><AniLink cover to="/conferences" direction="up" bg="#FFF">Conferences</AniLink></h3>
                <p>Whilst purpose comes at the forefront of every event, we’re well known for bringing our creativity to the table, to produce exciting, memorable and engaging events.</p>
                <AniLink cover to="/conferences" direction="up" bg="#FFF"><Arrow /></AniLink>
            </div>
            <div className="services-cards__item">
                <AniLink cover to="/event-production" direction="up" bg="#FFF">
                    <EventProductionImage />
                </AniLink>
                <h3><AniLink cover to="/event-production" direction="up" bg="#FFF">Event production</AniLink></h3>
                <p>Our in-house creative event production team work closely with clients, to design, build and execute ideas into reality. We simplify the process, we listen, we create and we deliver.
</p>
                <AniLink to="/event-production" direction="up" bg="#FFF"><Arrow /></AniLink>
            </div>
            <div className="services-cards__item">
                <AniLink cover to="/event-management" direction="up" bg="#FFF">
                    <EventManagementImage />
                </AniLink>
                <h3><AniLink cover to="/event-management" direction="up" bg="#FFF">Event management</AniLink></h3>
                <p>Known for our impeccable attention to detail, we thrive on the creation and management of large scale events.</p>
                <AniLink to="/event-management"><Arrow /></AniLink>
            </div>
            <div className="services-cards__item">
                <AniLink cover to="/venue-sourcing" direction="up" bg="#FFF">
                    <VenueSourcingImage />
                </AniLink>
                <h3><AniLink cover to="/venue-sourcing" direction="up" bg="#FFF">Venue sourcing</AniLink></h3>
                <p>With established contacts at a wide range of both well-known and more unique venues across the UK we have a wealth of experience finding venues to suit any event requirement.
</p>
                <AniLink cover to="/venue-sourcing" direction="up" bg="#FFF"><Arrow /></AniLink>
            </div>
        </div>
    </div>
)
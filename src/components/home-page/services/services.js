import React from "react";
import { Link } from "gatsby";
import Arrow from "../../../../src/images/arrow-right.svg";
import BrandActivationImage from "./brand-activation-image";
import ConferencesImage from "./conferences-image";
import EventProductionImage from "./event-producton-image";
import EventManagementImage from "./event-management-image";
import VenueSourcingImage from "./venue-sourcing-image";
import "./services.scss";

export default () => (
    <div className="services-section">
        <div className="services-heading">
            <h2>Services</h2>
            <p className="experience">
                <span className="experience__years">7 years of<br /> experience</span>
                <span className="experience__dash">————</span>
                <span className="experience__text">
                        <p>It’s no secret that the ‘Events’ industry is a huge field by any measure. Our portfolio of work includes, event design, management and production for global brands, private clients and corporate companies. </p>
                    </span>
            </p>
        </div>
        <div className="services-cards">
            <div className="services-cards__item">
                <Link to="/brand-activation">
                    <BrandActivationImage />
                </Link>
                <h3><Link to="/brand-activation">Brand activation</Link></h3>
                <p>On trend, flexible, and the perfect opportunity for some experiential marketing, we work closely with brands to produce unique experiences for consumers.</p>
                <Link to="/brand-activation"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/conferences">
                    <ConferencesImage />
                </Link>
                <h3><Link to="/conferences">Conferences</Link></h3>
                <p>Whilst purpose comes at the forefront of every event, we’re well known for bringing our creativity to the table, to produce exciting, memorable and engaging events.</p>
                <Link to="/conferences"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/event-production">
                    <EventProductionImage />
                </Link>
                <h3><Link to="/event-production">Event production</Link></h3>
                <p>Our in-house creative event production team work closely with clients, to design, build and execute ideas into reality. We simplify the process, we listen, we create and we deliver.
</p>
                <Link to="/event-production"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/event-management">
                    <EventManagementImage />
                </Link>
                <h3><Link to="/event-management">Event management</Link></h3>
                <p>Known for our impeccable attention to detail, we thrive on the creation and management of large scale events.</p>
                <Link to="/event-management"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/venue-sourcing">
                    <VenueSourcingImage />
                </Link>
                <h3><Link to="/venue-sourcing">Venue sourcing</Link></h3>
                <p>With established contacts at a wide range of both well-known and more unique venues across the UK we have a wealth of experience finding venues to suit any event requirement.
</p>
                <Link to="/venue-sourcing"><Arrow /></Link>
            </div>
        </div>
    </div>
)
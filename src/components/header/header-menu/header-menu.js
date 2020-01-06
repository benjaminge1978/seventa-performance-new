import React from "react";
import gsap from "gsap";
import { TimelineLite, Power3, Back } from "gsap/all";
import Menu from '../../menu/menu'
import { Link } from "gatsby";

import "./header-menu.scss";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMobile: false,
        };

        this.mobileMenuTimeline = new TimelineLite({paused: true});
        this.menu = React.createRef();
        this.toggleButton = React.createRef();
        this.animatedTextNodes = [];
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentDidMount() {
        this.mobileMenuTimeline.fromTo(
            this.menu.current,
            0.5,
            {
                x: "0",
            },
            {
                x: "-100%",
                ease: Power3.easeIn,
            },
        );
        this.mobileMenuTimeline.staggerFrom(
            this.animatedTextNodes,
            0.6,
            {
                autoAlpha: 0,
                y: -100,
                delay: 0.3,
                ease:Back.easeOut
            },
            0.01,
            "-=0.3"
        );
    }

    toggleMobileMenu() {
        const menuState = this.state.isOpenMobile;

        this.toggleButton.current.classList.toggle('animate');

        if (menuState) {
            this.mobileMenuTimeline.reverse();
        } else {
            this.mobileMenuTimeline.play();
        }

        this.setState({
            isOpenMobile: !menuState,
        });
    }

    outputMenuLinks(links) {
        return links.map((link, index) => (
            <li className="anim" key={index} ref={li => this.animatedTextNodes.push(li)}>
                <Link to={`/${link.href}`}>{link.text}</Link>
            </li>
        ))
    }

    render() {
        const submenuLinks = [
            {href: 'event-production', text: 'Event Production'},
            {href: 'conferences', text: 'Conferences'},
            {href: 'brand-activation', text: 'Brand Activation'},
            {href: 'event-management', text: 'Event Management'},
            {href: 'venue-sourcing', text: 'Venue Sourcing'},
        ];

        const topMenuLinks = [
            {href: 'case-studies', text: 'Case Studies'},
            {href: 'about', text: 'About'},
            {href: 'blog', text: 'Blog'},
            {href: 'contact', text: 'Contact'},
        ];

        return (
            <div className="header-navigation">
                <nav className="header-menu-wrapper">
                    <Menu id="header-menu" links={[{href: '', text: 'Services',  submenu: submenuLinks}].concat(topMenuLinks)}/>
                </nav>
                <div className="mobile-menu-wrapper" ref={this.menu}>
                    <div className="mobile-menu">
                        <h5 className="anim" ref={h5 => this.animatedTextNodes.push(h5)}>Navigate</h5>
                        <ul className="nav-block-1">
                            { this.outputMenuLinks(topMenuLinks) }
                        </ul>
                        <h5 className="anim" ref={h5 => this.animatedTextNodes.push(h5)}>Services</h5>
                        <ul className="nav-block-2">
                            { this.outputMenuLinks(submenuLinks) }
                        </ul>
                    </div>
                </div>
                <button className="menu-wrapper" onClick={this.toggleMobileMenu} onKeyDown={this.toggleMobileMenu} name="menu-toggle" tabIndex={0} aria-label="Toggle mobile menu">
                    <div id="toggle" className="hamburger-menu" ref={this.toggleButton} />
                </button>
            </div>
        )
    }
}

gsap.registerPlugin(TimelineLite, Power3, Back);
import React, {Fragment} from "react";
import gsap from "gsap";
import { TimelineMax, Power3 } from "gsap/all";
import SeventaS from "../banner/images/seventa-s";
import SeventaE from "../banner/images/seventa-e";
import SeventaV from "../banner/images/seventa-v";
import SeventaE2 from "../banner/images/seventa-e2";
import SeventaN from "../banner/images/seventa-n";
import SeventaT from "../banner/images/seventa-t";
import SeventaA from "../banner/images/seventa-a";
import SeventaEvents from "../banner/images/seventa-events";

import "./animated-logo.scss";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showed: false,
        };

        this._animatedLogoItems = [];
        this.masBlockRef = React.createRef();
        this._timelineMax = new TimelineMax({
            paused: true,
            onComplete: () => this.setState({showed: true}),
        });
    }

    componentDidMount() {
        this._timelineMax.staggerFrom(
                this._animatedLogoItems,
                1.3,
                {
                    delay: 0.1,
                    y: "20px",
                    autoAlpha: 0,
                    ease:Power3.easeOut
                },
                0.07
            );

        this._timelineMax.staggerTo(
                this._animatedLogoItems,
                0.5,
                {
                    y: "-40px",
                    autoAlpha: 0,
                    ease: Power3.easeOut
                },
                0.03,
                "-=0.2"
            )
            .to(
                ".mask-block",
                {
                    duration: 1,
                    scaleY: 0,
                    transformOrigin: "top left",
                    ease:Power3.easeOut
                },
                "-=0.4"
            )
            .play();
    }

    render() {
        return (
            this.state.showed
                ? null
                :   <Fragment>
                        <div className="athene-intro-logo-wrapper">
                            <div className="athene-intro-logo">
                                <SeventaS setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaE setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaV setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaE2 setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaN setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaT setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaA setRef={img => this._animatedLogoItems.push(img)}/>
                                <SeventaEvents setRef={img => this._animatedLogoItems.push(img)}/>
                            </div>
                        </div>
                        <div className="mask-block" ref={this.masBlockRef}/>
                    </Fragment>
        );
    }
}

gsap.registerPlugin(TimelineMax);
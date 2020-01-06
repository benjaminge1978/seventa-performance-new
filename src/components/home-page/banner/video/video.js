import React, { Fragment } from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iframeWidth: 640,
            iframeHeight: 360,
            iframeStyle: {
                transform: 'translate(0, 0)',
            },
        };

        this.iframe = React.createRef();
        this.changeIframeAspectRatio = this.changeIframeAspectRatio.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.changeIframeAspectRatio);
        this.changeIframeAspectRatio();

    }

    changeIframeAspectRatio() {
        const bannerVideo = document.getElementById('banner-section-video');

        if ( ! bannerVideo ) {
            return;
        }

        const { offsetHeight, offsetWidth } = bannerVideo,
            { iframeWidth, iframeHeight } = this.state,
            scaleV = offsetHeight / iframeHeight,
            scaleH = offsetWidth / iframeWidth,
            scale = iframeHeight * scaleH < offsetHeight ? scaleV : Math.max(scaleV, scaleH),
            newIframeWidth = iframeWidth * scale,
            newIframeHeight = iframeHeight * scale;

        this.setState({
            iframeWidth: newIframeWidth,
            iframeHeight: newIframeHeight,
            iframeStyle: {
                transform: `translate(-${(newIframeWidth - offsetWidth) / 2}px, -${(newIframeHeight - offsetHeight) / 2}px)`,
            }
        });
    }

    render() {
        const { iframeWidth, iframeHeight, iframeStyle } = this.state;

        return (
            <Fragment>
                <div className="baner-section-video-position" style={{height: '100%'}}>
                    <div id="banner-section-video" className="banner-section__video">
                        <iframe
                            id="banner-video-iframe"
                            src="https://player.vimeo.com/video/381300857?autoplay=1&loop=1&muted=1&controls=0"
                            allow="autoplay"
                            frameBorder="0"
                            title="Seventa promo"
                            width={iframeWidth}
                            height={iframeHeight}
                            style={iframeStyle}
                            ref={this.iframe}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}
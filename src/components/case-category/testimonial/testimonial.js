import React from "react"
import PropsTypes from "prop-types"

import './testimonial.scss'

const Testimonial = ({author, text}) => (
    <>
        <p className="testimonial__heading">What do our clients say</p>
        <div className="testimonial__content">
            <div className="testimonial__text" dangerouslySetInnerHTML={{__html: text}}/>
            <p className="testimonial__author">{author}</p>
        </div>
    </>
);

Testimonial.propsTypes = {
    author: PropsTypes.string.isRequired,
    text: PropsTypes.string.isRequired,
};

export default Testimonial;
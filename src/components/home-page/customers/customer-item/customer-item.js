import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const CustomerItem = ({ logo }) => (
    <div className="customer-item">
        <Img
            fluid={logo.fluid}
            alt={logo.title}
            objectFit="contain"
            objectPosition="0% 0%"
            className="animated-img"
        />
    </div>
);

CustomerItem.propTypes = {
    title: PropTypes.string
};

export default CustomerItem
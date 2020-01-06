import React from "react";
// import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "./header/header";
import Footer from "./footer/footer";

import "./_main.scss";
import "./layout.css"

class Layout extends React.Component {
    render() {
        const { className, children } = this.props,
            LayoutClassName = 'page-content' + ( 'undefined' !== typeof className ? ` ${className}` : '');

        return (
            <React.Fragment>
                <div className={LayoutClassName}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Layout

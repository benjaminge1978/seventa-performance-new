import React, { useEffect } from "react";
import SiteBrand from "../site-brand/site-brand";
import HeaderMenu from "./header-menu/header-menu";

import "./header.scss"

export default () => {
    useEffect(() => {
        const header = document.getElementById('site-header');

        window.addEventListener('scroll', () => {
            const scrollVal = window.pageYOffset;

            if ( scrollVal >= 200 ) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        })
    });

    return (
        <header id="site-header" className="site-header">
            <div className="site-header-brand">
                <SiteBrand />
            </div>
            <HeaderMenu />
        </header>
    )
}
import React from "react";
import PropsTypes from "prop-types";

import "./long-dash-text.scss";

const LongDashText = props => (
    <div className={'long-dash-text' + (props.className ? ` ${props.className}` : '')}>
        <div className="long-dash-text__dash">
            {
                props.dashLength
                ? '—'.repeat(Math.max(+props.dashLength, 4))
                : '————'
            }
        </div>
        <div className="long-dash-text__content">
            {props.children}
        </div>
    </div>
);

LongDashText.propsTypes = {
    dashLength: PropsTypes.number,
};

export default LongDashText;
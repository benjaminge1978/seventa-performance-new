import React from "react";
import PropsTypes from "prop-types";

import "./container-labelled.scss"

const ContainerLabelled = props => (
    <div className={'container-labelled' + (props.className ? ` ${props.className}` : '')}>
        <div className={'container-labelled__label' + (props.labelClassName ? ` ${props.labelClassName}` : '')}>
            {props.label}
        </div>
        <div className={'container-labelled__inner' + (props.innerClassName ? ` ${props.innerClassName}` : '')}>
            {props.children}
        </div>
    </div>
);

ContainerLabelled.propsTypes = {
    label: PropsTypes.string,
    innerClassName: PropsTypes.string,
    labelClassName: PropsTypes.string,
};

ContainerLabelled.defaultProps = {
    label: null
};

export default ContainerLabelled;
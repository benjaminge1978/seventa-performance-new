import React from "react";
import PropsTypes from "prop-types";
import Img from "gatsby-image";
import "./team-member.scss"

const TeamMember = ({ photo, name, position }) => (
    <div className="team-member">
        <div className="team-member__photo">
            <Img
                fluid={photo}
                alt={name}
                objectFit="cover"
                objectPosition="50% 50%"
                loading="lazy"
                className="animated-img"
            />
        </div>
        <h3 className="team-member__name">{name}</h3>
        <p className="team-member__position">{position}</p>
    </div>
);

TeamMember.propsTypes = {
    name: PropsTypes.string.isRequired,
    position: PropsTypes.string.isRequired,
    photo: PropsTypes.object.isRequired,
};

export default TeamMember;
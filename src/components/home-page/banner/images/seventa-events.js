import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default ({ setRef }) => {
    const file = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "seventa-logo-events.svg"}) {
                publicURL
                name
            }
        }
    `);

    const { publicURL, name } = file.file;

    return (
        <img ref={setRef} className="seventa-events" src={publicURL} alt={name} />
    );
}
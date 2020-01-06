import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default ({ setRef }) => {
    const file = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "seventa-logo-v.svg"}) {
                publicURL
                name
            }
        }
    `);

    const { publicURL, name } = file.file;

    return (
        <img ref={setRef} className="seventa-v" src={publicURL} alt={name} />
    );
}
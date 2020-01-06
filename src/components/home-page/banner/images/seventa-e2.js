import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default ({ setRef }) => {
    const file = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "seventa-logo-e2.svg"}) {
                publicURL
                name
            }
        }
    `);

    const { publicURL, name } = file.file;

    return (
        <img ref={setRef} className="seventa-e2" src={publicURL} alt={name} />
    );
}
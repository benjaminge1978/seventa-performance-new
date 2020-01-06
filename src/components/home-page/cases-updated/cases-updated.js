import React from "react";
import Case from "../../case/case";

import "./cases-updated.scss";

export default ({ data }) => {
    const cases = data.allContentfulHomepageCaseStudy.edges;

    return (
        <div className="cases-updated-list">
            {
                cases.map((item, index) => {
                    const { category, title, slug, image } = item.node;

                    return <Case
                        key={index}
                        index={index}
                        category={category.name}
                        fluidImg={image}
                        title={title}
                        thumbDesc=''
                        slug={slug}
                    />;
                })
            }
        </div>
    );
}
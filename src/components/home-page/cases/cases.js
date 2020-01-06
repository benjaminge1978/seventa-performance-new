import React from "react";
import Case from "../../case/case";

import "./cases.scss";

export default ({ data }) => {
    let index = -1;
    const alreadyShowed = [];
    const edges = data.allContentfulCaseCategory.edges;

    return (
        <div className="cases-list">
            {
                edges.map(item => {
                    const node = item.node;

                    if ( node.cases && node.cases.length ) {
                        for ( let i = 0; i < node.cases.length; i++ ) {
                            const { id } = node.cases[i];

                            if ( ! alreadyShowed.includes(id) ) {
                                alreadyShowed.push(id);
                                index++;

                                const { title, thumb_excerpt, thumbnail, slug } = node.cases[i];

                                return (
                                    <Case
                                        key={index}
                                        index={index}
                                        category={node.name}
                                        fluidImg={thumbnail}
                                        title={title}
                                        thumbDesc={thumb_excerpt}
                                        slug={slug}
                                    />
                                );
                            }
                        }

                        return null;
                    }

                    return null;
                })
            }
        </div>
    );
}
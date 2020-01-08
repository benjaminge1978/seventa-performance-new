import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ArrowLeft from "../../images/arrow-left.svg";
import ArrowRight from "../../images/arrow-right.svg";

export default ({ prevPost, nextPost }) => (
    <div className="blog-post-single__familiarity-links">
        {prevPost ? <AniLink className="familiarity-link prev-post-link" cover to={`/blog/${prevPost}`} direction="up" bg="#ffffff"><ArrowLeft /><span>Previous post</span></AniLink> : ''}
        {nextPost ? <AniLink className="familiarity-link next-post-link" cover to={`/blog/${nextPost}`} direction="up" bg="#ffffff"><span>Next post</span><ArrowRight /></AniLink> : ''}
    </div>
)
import React from "react";
import {Link} from "gatsby";
import ArrowLeft from "../../images/arrow-left.svg";
import ArrowRight from "../../images/arrow-right.svg";

export default ({ prevPost, nextPost }) => (
    <div className="blog-post-single__familiarity-links">
        {prevPost ? <Link className="familiarity-link prev-post-link" to={`/blog/${prevPost}`}><ArrowLeft /><span>Previous post</span></Link> : ''}
        {nextPost ? <Link className="familiarity-link next-post-link" to={`/blog/${nextPost}`}><span>Next post</span><ArrowRight /></Link> : ''}
    </div>
)
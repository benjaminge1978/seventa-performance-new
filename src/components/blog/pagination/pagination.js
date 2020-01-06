import React from "react";
import PropsTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./pagination.scss";

const Pagination = ({maxPages, current}) => {
    if ( 1 === maxPages ) {
        return null;
    }

    let pageNumbers = [];

    //Need refactoring
    if ( maxPages >= 9 ) {
        if ( current < 4 ) {
            pageNumbers = [1, 2, 3, '...', maxPages];
        } else if ( current > (maxPages - 3) ) {
            pageNumbers = [1, '...', maxPages - 2, maxPages - 1, maxPages];
        } else {
            pageNumbers = [1, '...', current - 1, current, current + 1, '...', maxPages];;
        }
    } else {
        pageNumbers = [...Array(maxPages).keys()].map(index => index + 1);
    }

    return (
        <div className="pagination">

            {
                current === 1
                    ? null
                    :   <Link className="pagination__arrow" to={current > 2 ? `/blog/${current - 1}` : `blog`} aria-label="Previous page">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Link>
            }

            <ul className="pagination__list">
                {
                    pageNumbers.map((linkText, index) => (
                        <li key={index}>
                            {
                                'number' === typeof linkText
                                ?   <Link
                                        to={1 === linkText ? `/blog` : `/blog/${linkText}`}
                                        className={'pagination__link' + (linkText === current ? ' pagination__link--current' : '')}
                                        aria-label={`Pagination page ${linkText}`}
                                    >
                                        {linkText}
                                    </Link>
                                :    <span>{linkText}</span>
                            }
                        </li>
                    ))
                }
            </ul>

            {
                current === maxPages
                    ? null
                    :   <Link className="pagination__arrow" to={`/blog/${current + 1}`} aria-label="Next page">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
            }

        </div>
    );
};

Pagination.propsTypes = {
    maxPages: PropsTypes.number.isRequired,
    current: PropsTypes.number.isRequired,
};

export default Pagination;
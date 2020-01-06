import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import CustomerItem from "./customer-item/customer-item";

import "./customers.scss";

export default () => {
    const customers = useStaticQuery(graphql`
        {
            allContentfulCustomers {
                nodes {
                    logo {
                        title
                        fluid(maxWidth: 400, quality: 80) {
                          ...GatsbyContentfulFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }

    `);

    if (!customers.allContentfulCustomers.nodes.length) {
        return null
    }

    return (
        <>
            <h3>Some of our Customers</h3>
            <div className="customers-row">
                {
                    customers.allContentfulCustomers.nodes.map((customer, index) => (
                        <CustomerItem
                            logo={customer.logo}
                            key={index}
                        />
                    ))
                }
            </div>
        </>
    );
}
import React from 'react'

import './offices.scss'

export default () => {
    const offices = [
        {
            location: 'Bournemouth',
            addresse: [
                'Seventa Events, 543 Wallisdown Rd,',
                'Bournemouth, BH12 5AD'
            ],
        },
        {
            location: 'London',
            addresse: [
                'The Dock, Tobacco Quay,',
                'Wapping Lane, London, E1W 2SF'
            ],
        },
    ]

    return (
        <div className="offices-row">
            {
                offices.map((office, index) => (
                    <div className="offices-row__item" key={index}>
                        <h4>{office.location} Office</h4>
                        {
                            office.addresse.length
                            ? office.addresse.map((addresseRow, index) => (
                                <p key={index}>{addresseRow}</p>
                            ))
                            : null
                        }
                    </div>
                ))
            }
        </div>
    )
}
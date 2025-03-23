import React from 'react';

const trustPrinciples = [
    {
        title: 'Transparency',
        points: [
            'We openly inform about the composition of fabrics, the country of production and environmental friendliness of materials.',
            'Honest prices without hidden fees and surcharges.',
            'Detailed photos and real customer reviews.'
        ]
    },
    {
        title: 'Responsibility',
        points: [
            'We use high-quality materials and cooperate with ethical manufacturers.',
            'We adhere to the principles of environmental friendliness and sustainable production.',
            'We guarantee fair exchange and return of goods.'
        ]
    },
    {
        title: 'Understanding',
        points: [
            'We listen to our customers and improve our assortment to meet their needs.',
            'We offer convenient size charts and recommendations for choosing clothes.',
            'We give advice on how to care for your clothes to make them last longer.'
        ]
    },
    {
        title: 'Service',
        points: [
            'Fast and high-quality customer support via chat, messengers, and phone.',
            'Flexible payment and delivery terms.',
            'Bonuses, discounts, and a loyalty program for regular customers.'
        ]
    },
    {
        title: 'Timeliness',
        points: [
            'Promptly updating the assortment in accordance with fashion trends.',
            'Fast order processing and delivery.',
            'Timely information about promotions, new products, and discounts.'
        ]
    }
];

const DetailsTrust = () => {
    return (
        <div className={"details-trust"}>
            <div className={"details-trust__container"}>
                {trustPrinciples.map(({ title, points }) => (
                    <div key={title}>
                        <h3>{title}</h3>
                        <ul>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsTrust;

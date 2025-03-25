import React, { useState } from 'react';

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

    const [expanded, setExpanded] = useState(false);

    const [expandedPoints, setExpandedPoints] = useState(null);

    const toggleExpansion = (index) => {
        setExpandedPoints(expandedPoints === index ? null : index); // Якщо вже відкрито - закрити
    };

    return (
        <div className={`details-trust ${expanded ? 'details-trust--expanded' : ''}`}>
            <div
                className={`details-trust__toggle ${expanded ? 'details-trust__toggle--expanded' : ''}`}
                onClick={() => setExpanded(!expanded)}
            >
                <div className='details-trust__toggle-text'>
                    {[...'TRUST'].map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </div>
            <div className="details-trust__container" onClick={(e) => e.stopPropagation()}>
                {trustPrinciples.map(({ title, points }, index) => (
                    <div key={title}>
                        <h3 className={'details-trust__title'}
                            onClick={() => toggleExpansion(index)}
                        >
                            {title}
                        </h3>
                        <div
                            className={`details-trust__content ${expandedPoints === index ? 'details-trust__content-expanded' : ''}`}
                        >
                            <ul>
                                {points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default DetailsTrust;

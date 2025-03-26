import React from 'react';

const detailsData = [
    {
        title: 'High-Quality Products',
        text: 'We offer only verified clothing from reliable manufacturers, ensuring durability and premium quality for every purchase.'
    },
    {
        title: 'Fast Delivery',
        text: 'Orders are processed promptly and delivered in the shortest possible time, so you can enjoy your purchase without delay.'
    },
    {
        title: 'Positive Reviews',
        text: 'Our customers are always satisfied with their shopping experience, leaving great feedback about our service and products.'
    },
    {
        title: 'Money-Back Guarantee',
        text: 'If the product does not meet your expectations, you can return it hassle-free within the return period.'
    }
];

const DetailsContentItems = () => {
    return (
        <div className="details-content-items">
            {detailsData.map((item, index) => (
                <div key={index} className="details-content-items__item">
                    <h3 className="details-content-items__title">{item.title}</h3>
                    <p className="details-content-items__text">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default DetailsContentItems;
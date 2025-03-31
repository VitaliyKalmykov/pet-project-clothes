import React from 'react';

const storeLocations = [
    {
        id: 1,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41037.48466295678!2d36.257585245857264!3d49.99555679096184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0a0ad64df05%3A0xbe4c2a55c43a0dbe!2z0KLQoNCmICLQpNGA0LDQvdGG0YPQt9GM0LrQuNC5INCx0YPQu9GM0LLQsNGAIg!5e0!3m2!1suk!2sua!4v1743243999195!5m2!1suk!2sua",
        city: 'Kharkiv',
        street: 'Academician Pavlov Street',
        shop: 'French Boulevard, 6AM-6PM'
    },
    {
        id: 2,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1273839445207!2d30.523172600000002!3d50.438727899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefe0307e81f%3A0x1f234c3b0a0b492!2z0JPRg9C70ZbQstC10YA!5e0!3m2!1suk!2sua!4v1743409830335!5m2!1suk!2sua",
        city: 'Kyiv',
        street: 'Esplanade Street',
        shop: "Gullivero, 10AM-12PM"
    },
    {
        id: 3,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37335.32598811007!2d35.01031071811822!3d48.484243629334365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95860d3ae7c9d%3A0x4d45b51b1273e21!2z0KLQpiDCq9Cc0JvQmNCdwrs!5e0!3m2!1suk!2sua!4v1743244198497!5m2!1suk!2sua",
        city: 'Dnipro',
        street: 'Yaskrava Street',
        shop: 'Mill, 9AM-10PM'
    },
    {
        id: 4,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.7533789935055!2d24.034403536393505!3d49.83940169490614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6953de36a9%3A0xf3d87e6780dc3b12!2z0KLQpiAi0KDQvtC60YHQvtC70LDQvdCwIg!5e0!3m2!1suk!2sua!4v1743410019912!5m2!1suk!2sua",
        city: 'Lviv',
        street: 'Soborna street',
        shop: "Roxolana, 7AM-8PM"
    }
];

const OfflineStoresMaps = () => {
    return (
        <div className='offline-store-maps'>
            {storeLocations.map(({ id, src, city, street, shop }) => (
                <article key={id} className='offline-store-maps__card'>
                    <h2>{city}</h2>
                    <h3>{street}</h3>
                    <h4>{shop}</h4>
                    <iframe
                        src={src}
                        className={`offline-store-maps__map`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </article>
            ))}
        </div>
    );
};

export default OfflineStoresMaps;

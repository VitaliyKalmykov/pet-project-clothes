import React from 'react';

const storeLocations = [
    {
        id: 1,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41037.48466295678!2d36.257585245857264!3d49.99555679096184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0a0ad64df05%3A0xbe4c2a55c43a0dbe!2z0KLQoNCmICLQpNGA0LDQvdGG0YPQt9GM0LrQuNC5INCx0YPQu9GM0LLQsNGAIg!5e0!3m2!1suk!2sua!4v1743243999195!5m2!1suk!2sua"
    },
    {
        id: 2,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41037.48466295678!2d36.257585245857264!3d49.99555679096184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0a0ad64df05%3A0xbe4c2a55c43a0dbe!2z0KLQoNCmICLQpNGA0LDQvdGG0YPQt9GM0LrQuNC5INCx0YPQu9GM0LLQsNGAIg!5e0!3m2!1suk!2sua!4v1743244123115!5m2!1suk!2sua"
    },
    {
        id: 3,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37335.32598811007!2d35.01031071811822!3d48.484243629334365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95860d3ae7c9d%3A0x4d45b51b1273e21!2z0KLQpiDCq9Cc0JvQmNCdwrs!5e0!3m2!1suk!2sua!4v1743244198497!5m2!1suk!2sua"
    },
    {
        id: 4,
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.7987564441023!2d35.06683747676186!3d48.498750825947816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9587980e92ba3%3A0x68f6a68f5ca82dbc!2z0KLQpiDCq9Cd0LDRiNCwINCf0YDQsNCy0LTQsMK7!5e0!3m2!1suk!2sua!4v1743244237834!5m2!1suk!2sua"
    }
];

const OfflineStoresMaps = () => {
    return (
        <div className={'offline-store__maps'}>
            {storeLocations.map(({ id, src }) => (
                <div key={id}>
                    <iframe
                        src={src}
                        width="400" height="400" allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default OfflineStoresMaps;

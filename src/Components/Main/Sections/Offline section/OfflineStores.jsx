import React from 'react';
import OfflineStoresMaps from "./OfflineStoresMaps";

const OfflineStores = () => {
    return (
        <section className={'offline-store'}>
            <div className={'container'}>
                <h2 className={'offline-store__title'}>We are waiting for you!</h2>
             <OfflineStoresMaps />
            </div>
        </section>
    );
};

export default OfflineStores;
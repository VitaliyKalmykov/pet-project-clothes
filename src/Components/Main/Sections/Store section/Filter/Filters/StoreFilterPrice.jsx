import React from 'react';
import NumberInput from "../../../../../UI/NumberInput";

const StoreFilterPrice = () => {
    return (
        <div>
            <h2>
                Price
            </h2>
            <NumberInput
                label='From'
                id={'from'}
                name={'from'}
            />
            <NumberInput
                label='To'
                id={'to'}
                name={'to'}
            />
        </div>
    );
};

export default StoreFilterPrice;
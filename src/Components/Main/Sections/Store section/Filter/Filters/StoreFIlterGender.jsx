import React from 'react';
import RadioInput from "../../../../../UI/RadioInput";

const StoreFilterGender = ({filters, setFilters}) => {

    const handleGenderChange = (event) => {
        setFilters((prev) => ({...prev, gender: event.target.value}));
    }

    return (
        <div>
            <h2>Gender</h2>
            <RadioInput
                name='gender'
                options={
                    [
                        {value: 'male', label: 'Male'},
                        {value: 'female', label: 'Female'},
                        {value: 'unisex', label: 'Unisex'}
                    ]
                }
                selectedValue={filters.gender}
                onChange={handleGenderChange}
            />
        </div>
    );
};

export default StoreFilterGender;
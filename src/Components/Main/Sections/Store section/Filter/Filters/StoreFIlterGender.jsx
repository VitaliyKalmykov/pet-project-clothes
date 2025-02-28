import React, {useState} from 'react';
import RadioInput from "../../../../../UI/RadioInput";

const StoreFIlterGender = () => {

    const [selectedOptionGender, setSelectedOptionGender] = useState('');

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
                selectedValue={selectedOptionGender}
                onChange={(e) => setSelectedOptionGender(e.target.value)}
            />
        </div>
    );
};

export default StoreFIlterGender;
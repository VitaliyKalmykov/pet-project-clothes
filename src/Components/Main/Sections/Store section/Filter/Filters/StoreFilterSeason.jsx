import React, {useState} from 'react';
import RadioInput from "../../../../../UI/RadioInput";

const StoreFilterSeason = () => {

    const [selectedOptionSeason, setSelectedOptionSeason] = useState('');

    return (
        <div>
            <h2>Season</h2>
            <RadioInput
                name='season'
                options={
                    [
                        {value: 'winter', label: 'Winter'},
                        {value: 'Fall/Spring', label: 'Fall/Spring'},
                        {value: 'summer', label: 'Summer'}
                    ]
                }
                selectedValue={selectedOptionSeason}
                onChange={(e) => setSelectedOptionSeason(e.target.value)}
            />
        </div>
    );
};

export default StoreFilterSeason;
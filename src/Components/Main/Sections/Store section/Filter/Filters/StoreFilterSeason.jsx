import React from 'react';
import RadioInput from "../../../../../UI/RadioInput";

const StoreFilterSeason = ({filters, setFilters}) => {

    const handleSeasonChange = (event) => {
        setFilters((prev) => ({ ...prev, season: event.target.value }));
    };
    return (
        <div>
            <h2>Season</h2>
            <RadioInput
                name='season'
                options={
                    [
                        {value: 'winter', label: 'Winter'},
                        {value: 'fall/spring', label: 'Fall/Spring'},
                        {value: 'summer', label: 'Summer'}
                    ]
                }
                selectedValue={filters.season}
                onChange={handleSeasonChange}
            />
        </div>
    );
};

export default StoreFilterSeason;
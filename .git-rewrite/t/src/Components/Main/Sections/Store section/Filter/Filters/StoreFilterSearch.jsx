import React from 'react';
import TextInput from "../../../../../UI/TextInput";

const StoreFilterSearch = ({filters, setFilters}) => {

    const handleSearchChange = (event) => {
        setFilters((prev) => ({...prev, search: event.target.value}));
    }

    return (
        <div>
          <TextInput
              type={'text'}
              id={'search'}
              name={'search'}
              label={'Search clothes'}
              value={filters.search}
              onChange={handleSearchChange}
          />
        </div>
    );
};

export default StoreFilterSearch;
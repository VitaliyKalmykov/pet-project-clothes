import React from 'react';
import TextInput from "../../../../../UI/TextInput";

const StoreFilterSearch = () => {
    return (
        <div>
          <TextInput type={'text'} id={'search'} name={'search'} label={'Search clothes'}  />
        </div>
    );
};

export default StoreFilterSearch;
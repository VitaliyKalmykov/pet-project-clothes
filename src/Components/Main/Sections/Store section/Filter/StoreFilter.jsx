import React, {useState} from 'react';
import Button from "../../../../UI/Button";
import StoreFilterItems from "./StoreFilterItems";

const StoreFilter = () => {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <div>
            <div>
                <Button type={'button'} className={'button store-filter__button'}>
                    Filters
                </Button>
                   <StoreFilterItems/>
                </div>
            </div>
    );
};

export default StoreFilter;
import React, {useState} from 'react';
import StoreClothes from "./Clothes/StoreClothes";
import StoreFilter from './Filter/StoreFilter'
import hatsData from './Clothes/Hats/hatsData';
import hoodiesData from "./Clothes/Hoodies/hoodiesData";
import pantsData from "./Clothes/Pants/pantsData";
import sweatersData from "./Clothes/Sweaters/sweatersData";
import shoesData from "./Clothes/Shoes/shoesData";
import jacketsData from "./Clothes/Jackets/jacketData";

const Store = () => {

    //фільтри
    const [filters, setFilters] = useState({
        gender: '',
        priceRange: [0, 1000],
        season: '',
        search: ''
    })

    //об'єкти одягу
    const allItems = [
        { data: hatsData, title: "Hats" },
        { data: jacketsData, title: "Jackets" },
        { data: hoodiesData, title: "Hoodies" },
        { data: sweatersData, title: "Sweaters" },
        { data: pantsData, title: "Pants" },
        { data: shoesData, title: "Shoes" },
    ];

    // Функція для фільтрації товарів
    const filteredItems = allItems.map(({ data, title }) => ({
        title,
        data: data.filter((item) => {
            const matchesGender = filters.gender ? item.gender.includes(filters.gender) : true;
            const matchesPrice = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
            const matchesSeason = filters.season ? item.season === filters.season : true;
            const matchesSearch = filters.search ? item.name.toLowerCase().includes(filters.search.toLowerCase()) : true;

            return matchesGender && matchesPrice && matchesSeason && matchesSearch;
        }),
    }));

    return (
        <div className="container">
            <StoreFilter filters={filters} setFilters={setFilters} />
            {filteredItems.map(({ data, title }) =>
                data.length > 0 ? (
                    <div className="store__container" key={title}>
                        <StoreClothes itemsData={data} title={title} />
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Store;
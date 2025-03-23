import React, {useState} from 'react';
import StoreClothes from "./Clothes/StoreClothes";
import StoreFilter from './Filter/StoreFilter'
import hatsData from './Clothes/Hats/hatsData';
import hoodiesData from "./Clothes/Hoodies/hoodiesData";
import pantsData from "./Clothes/Pants/pantsData";
import sweatersData from "./Clothes/Sweaters/sweatersData";
import shoesData from "./Clothes/Shoes/shoesData";
import jacketsData from "./Clothes/Jackets/jacketData";
import StoreModal from "./Modals/StoreModal";

const Store = ({isModalArr, setIsModalArr}) => {

    //для модалки
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);

    //ітем для модалки
    const [isModalItem, setIsModalItem] = useState(null);

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

    //для умовної відрисовки, перевірка на пустий масив
    const noItemsFound = filteredItems.every(({ data }) => data.length === 0);


    return (
        <section>
        <div className="container">
            <StoreFilter filters={filters} setFilters={setFilters} />
            {noItemsFound ? (
                <p>No products were found for these filters</p>
            ) : (
                filteredItems.map(({ data, title }) =>
                    data.length > 0 ? (
                            <div className="store__container" key={title}>
                                <StoreClothes
                                    setIsItemModalOpen={setIsItemModalOpen}
                                    setIsModalItem={setIsModalItem}
                                    itemsData={data}
                                    title={title}
                                />
                            </div>
                    ) : null
                )
            )}
        </div>
            <StoreModal
                isModalItem={isModalItem}
                isItemModalOpen={isItemModalOpen}
                setIsItemModalOpen={setIsItemModalOpen}
                setIsModalArr={setIsModalArr}
                isModalArr={isModalArr}
            />
        </section>
    );
};

export default Store;
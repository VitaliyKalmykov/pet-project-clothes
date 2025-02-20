import React from 'react';

const StoreClothesItem = ({item, index}) => {
    return (
      <div key={index} className={"store-items__item-wrapper"}>
          <article className={'store-items__item'}>
              <h3 className={'store-items__item-text'}>{item.name}</h3>
              <img className={"store-items__img"} src={item.images.front} alt={item.front} />
          </article>
      </div>
    );
};

export default StoreClothesItem;
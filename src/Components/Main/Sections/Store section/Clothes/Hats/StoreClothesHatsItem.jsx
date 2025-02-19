import React from 'react';

const StoreClothesHatsItem = ({hat, index}) => {
    return (
      <div key={index} className={"store-hats__item-wrapper"}>
          <article className={'store-hats__item'}>
              <h3 className={'store-hats__item-text'}>{hat.name}</h3>
              <img className={"store-hats__img"} src={hat.images.front} alt={hat.front} />
          </article>
      </div>
    );
};

export default StoreClothesHatsItem;
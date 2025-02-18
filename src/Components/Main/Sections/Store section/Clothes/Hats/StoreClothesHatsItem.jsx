import React from 'react';

const StoreClothesHatsItem = ({hat, index}) => {
    return (
      <div key={index} className={"store__hats-item-wrapper"}>
          <article className={'store__hats-item'}>
              <h3 className={'store__hats-item-text'}>{hat.name}</h3>
              <img className={"store__hats-img"} src={hat.images.front} alt={hat.front} />
          </article>
      </div>
    );
};

export default StoreClothesHatsItem;
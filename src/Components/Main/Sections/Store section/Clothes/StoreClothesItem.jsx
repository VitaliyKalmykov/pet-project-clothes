import React, {useState} from 'react';
import Button from "../../../../UI/Button";

const StoreClothesItem = ({item}) => {

    const [imgSrc, setImgSrc] = useState(item.images.front);


    return (
      <div key={item.name} className={"store-item__item-wrapper"}>
          <article className={'store-item'}
                   onMouseEnter={() => item.images.side && setImgSrc(item.images.side)}
                   onMouseLeave={() => setImgSrc(item.images.front)}
          >
              <h3 className={'store-item__item-text'}>{item.name}</h3>
              <p className={'store-item__price'}>${item.price}</p>
              <img
                  className="store-item__img"
                  src={imgSrc}
                  alt={item.front}
              />
              <div className={'store-item__buttons'}>
                  <Button className={'store-item__button'} type={'button'}>Add to cart</Button>
              </div>
          </article>
      </div>
    );
};

export default StoreClothesItem;
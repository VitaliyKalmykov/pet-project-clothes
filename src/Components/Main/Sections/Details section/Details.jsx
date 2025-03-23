import React from 'react';
import DetailsTrust from "./DetailsTrust";

const Details = () => {
    return (
        <section className={'details'}>
       <div className={'container'}>
           <h2>
               <span>T.R.U.S.T </span>
               Principle
           </h2>
           <DetailsTrust/>
       </div>
        </section>
    );
};

export default Details;
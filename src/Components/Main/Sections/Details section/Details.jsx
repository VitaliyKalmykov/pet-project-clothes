import React from 'react';
import DetailsTrust from "./Details content/DetailsTrust";
import DetailsContentItems from "./Details content/DetailsContentItems";
import DetailsComments from "./Details comments/DetailsComments";

const Details = () => {
    return (
        <section className={'details'}>
       <div className={'container'}>
           <h2 className={'details-title'}>
               Details about our store
           </h2>
           <div className={'details-content'}>
               <DetailsTrust/>
               <DetailsContentItems />
           </div>
           <div className={'details-comments'}>
               <DetailsComments />
           </div>
       </div>
        </section>
    );
};

export default Details;
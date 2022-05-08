import React from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
   return (
      <section>
         <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
         </div>
         <div>
            {data.map((item) => {
               return (
                  <Tour key={item.id} {...item} removeTour={removeTour}></Tour>
               );
            })}
         </div>
      </section>
   );
};

export default Tours;

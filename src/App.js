import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const removeTour = (id) => {
      const newTour = data.filter((item) => item.id !== id);
      setData(newTour);
   };

   const fetchApi = async () => {
      setLoading(true);

      try {
         const response = await fetch(url);
         const data = await response.json();
         setLoading(false);
         setData(data);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   useEffect(() => {
      fetchApi();
   }, []);
   if (loading) {
      return (
         <main>
            <Loading />
         </main>
      );
   }
   if (data.length === 0) {
      return (
         <main>
            <div className="title">
               <h2> no tours left</h2>
               <button className="btn" onClick={fetchApi}>
                  Refresh
               </button>
            </div>
         </main>
      );
   }
   return (
      <main>
         <Tours data={data} removeTour={removeTour} />
      </main>
   );
}
export default App;

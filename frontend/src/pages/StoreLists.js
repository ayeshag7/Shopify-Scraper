import { useEffect, useState } from "react";
import { StoreCard } from "../components/StoreCard";
import { useLocation } from "react-router-dom";
import { Loading } from '../components/Loading';

export const StoreLists = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const all = currentUrl.split("/");
  const region = all[all.length - 1];

  const [topStores, setTopStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopStores = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/top-stores/${region}`);
        if (!response.ok) {
          throw new Error("Failed to fetch top stores data");
        }
        const data = await response.json();
        console.log(data)
        setTopStores(data.top_stores);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopStores();
  }, [region]);

  let regions_dict = {'us': 'USA', 'gb': 'UK', 'br': 'Brazil', 'de': 'Germany', 'fr': 'France'}

  return (
    <main>
      {isLoading ? ( // Conditionally render loading indicator if isLoading is true
        <div className="flex items-center justify-center mt-24">
          <Loading />
        </div>
      ) : (
        // Conditionally render store list if isLoading is false
        <div className="flex flex-col gap-y-12">
          <h1 className="px-32 text-2xl text-tblue font-bold">Top Stores in {regions_dict[region]}:</h1>
          <div className='w-full px-28'>
            <div className='w-max h-16 bg-gray-50 border rounded-sm flex justify-start gap-x-12 items-center py-4 px-8'>

              
              <p className='text-tblue text-3xl font-bold'>Rank</p>
              

              <div className='flex justify-start gap-x-12'>
                <p className='text-xl'>Store</p>
                <p className='text-lg'>Platform</p>
                <p className='text-lg'>Category</p>
                <p className='text-lg'>Revenue</p>
                <p className='text-lg'>Monthly Visits</p>
              </div>

            </div>
          </div>
          <div className="store-list flex flex-col gap-y-7">
            {topStores.map((store, index) => (
              <StoreCard key={index} storeInfo={store} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

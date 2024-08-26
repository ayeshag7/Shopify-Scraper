import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StorePage = () => {
  const params = useParams();
  console.log(params)
  const [storeData, setStoreData] = useState({});
  const url = `http://127.0.0.1:5000/store-info?url=https://www.aftership.com/brands/${params.storeId}.com`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch store data");
        }
        const data = await response.json();
        console.log(data);
        console.log(data.store_info);
        setStoreData(data.store_info);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-y-12">
        <h1 className="text-5xl text-tblue font-bold">{storeData[0]}</h1>
        <div className="flex gap-x-12">
          <div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[3]}</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Custom Cart Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[5]}</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Estimated Monthly Sales</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[7]}</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Estimated Monthly Visits</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[9]}</p></div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Estimated Monthly Page Views</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[11]}</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Estimated Products Sold</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">{storeData[13]}</p></div>
          </div>
        </div>
      </div>
    </main>
  );
};

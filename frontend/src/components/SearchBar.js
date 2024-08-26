import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        if (searchTerm === "Stacific"){
            navigate("/store/Stacific")
        } else if (searchTerm === "Aparntetit") {
            navigate("/store/Aparntetit")
        } else if (searchTerm === "BoothCosly") {
            navigate("/store/BoothCosly")
        } else if (searchTerm === "Percko") {
            navigate("/store/Percko")
        } else if (searchTerm === "skims") {
            navigate("/store/Skims")
        } else {
            navigate(`/store/${searchTerm}`);
        } 
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

  return (
    <form>
        <div className="flex">
            <div className="relative w-full shadow-md shadow-custom rounded-lg">
                <input type="search" id="search-dropdown" 
                value={searchTerm}
                onChange={handleInputChange}
                className="block py-4 pl-2.5 pr-96 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-lg border-gray-700 border-s-2 border focus:ring-blue-500 focus:border-blue-500" placeholder="Search Stores..." required />
                <button onClick={handleSubmit} type="submit" className="absolute top-0 end-0 p-3.5 text-sm font-medium h-full text-white bg-tblue rounded-e-lg border border-blue-700 hover:bg-torange focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
  )
}

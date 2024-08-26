import { SearchBar } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {

  const navigate = useNavigate();

  function handleSubmit(urlp) {
    navigate(`/storelists/${urlp}`)
  }


  return (
    <main>
        <p className="text-2xl font-bold text-tblue mb-8 mt-0">Search a particular store:</p>
        <SearchBar/>
        <p className="text-2xl font-bold text-tblue mb-12 mt-12">Or View Top Stores Region Wise:</p>
        <div className="flex flex-col gap-y-4">
          <div className="w-72 h-12 bg-gray-50 border border-tblue rounded-lg shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out">
            <button className="flex py-2 px-4"
            onClick={() => handleSubmit('us')}>
              <p className="text-tblue text-lg">Top Shopify stores in USA</p>
            </button>
          </div>
          <div className="w-72 h-12 bg-gray-50 border border-tblue rounded-lg shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out">
            <button className="flex py-2 px-4"
            onClick={() => handleSubmit('gb')}>
              <p className="text-tblue text-lg">Top Shopify stores in UK</p>
            </button>
          </div>
          <div className="w-72 h-12 bg-gray-50 border border-tblue rounded-lg shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out">
            <button className="flex py-2 px-4"
            onClick={() => handleSubmit('fr')}>
              <p className="text-tblue text-lg">Top Shopify stores in France</p>
            </button>
          </div>
          <div className="w-72 h-12 bg-gray-50 border border-tblue rounded-lg shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out">
            <button className="flex py-2 px-4"
            onClick={() => handleSubmit('de')}>
              <p className="text-tblue text-lg">Top Shopify stores in Germany</p>
            </button>
          </div>
          <div className="w-72 h-12 bg-gray-50 border border-tblue rounded-lg shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out">
            <button className="flex py-2 px-4"
            onClick={() => handleSubmit('br')}>
              <p className="text-tblue text-lg">Top Shopify stores in Brazil</p>
            </button>
          </div>
        </div>
    </main>
  )
}

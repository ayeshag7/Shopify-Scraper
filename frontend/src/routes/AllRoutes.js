import { Routes, Route } from "react-router-dom";
import { SearchPage, StoreLists, StorePage, Stacific, Aparntetit, BoothCosly, Percko, Skims } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      {/* Route for the search page */}
      <Route path="/" element={<SearchPage />} />

      {/* Route for the store lists */}
      <Route path="/storelists" element={<StoreLists />}>
        {/* Nested routes for different regions */}
        <Route path="us" element={<StoreLists region="us" />} />
        <Route path="gb" element={<StoreLists region="gb" />} />
        <Route path="br" element={<StoreLists region="br" />} />
        <Route path="fr" element={<StoreLists region="fr" />} />
        <Route path="de" element={<StoreLists region="de" />} />
      </Route>

      {/* Dynamic route for each store */}
      <Route path="/store/:storeId" element={<StorePage />} />

      <Route path="/store/Stacific" element={<Stacific/>}/>
      <Route path="/store/BoothCosly" element={<BoothCosly/>}/>
      <Route path="/store/Aparntetit" element={<Aparntetit/>}/>
      <Route path="/store/Percko" element={<Percko/>}/>
      <Route path="/store/Skims" element={<Skims/>}/>
    </Routes>
  );
};

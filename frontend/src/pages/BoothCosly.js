export const BoothCosly = () => {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-y-12">
        <h1 className="text-5xl text-tblue font-bold">boothcosly.com</h1>
        <div className="flex gap-x-12">
          <div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Global Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">#1,733,407</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Country Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">#14,395</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Previous Month's Sales</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">$61,234</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Monthly Visits</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">34K</p></div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Pages Per Visit</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">1.48</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Website Bounce Rate</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">40.21%</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

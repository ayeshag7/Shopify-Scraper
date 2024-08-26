import React from 'react'

export const Skims = () => {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-y-12">
        <h1 className="text-5xl text-tblue font-bold">Skims</h1>
        <div className="flex gap-x-12">
          <div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">#54</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Custom Cart Rank</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">#1</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Annual Revenue</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">$750M</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Previous Month's Revenue</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">$71,532,000</p></div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Monthly Visits</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">5,317,355</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Number of Products Sold</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">475</p></div>
            <div className="w-80 h-10 bg-orange-500 flex items-center justify-center"><p className="text-lg text-white">Average Product Price</p></div>
            <div className="w-80 h-10 bg-gray-200 flex items-center justify-center"><p className="text-lg text-tblue">$50.93</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

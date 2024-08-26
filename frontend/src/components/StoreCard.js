import React from 'react';
import { Link } from 'react-router-dom';

const parseRevenue = (range) => {
  if (range === '-') {
    return range; // Return '-' as it is
  } else {
    const [min, max] = range.split('-').map(val => parseFloat(val.replace('B', '')));
    if (!isNaN(min) && !isNaN(max)) {
      const randomSubtract = Math.floor(Math.random() * (max - min + 1)) + 1; // Generate random number between 1 and the range difference
      const newValue = Math.max(max - randomSubtract, min); // Ensure the new value is not negative
      return `${newValue.toFixed(1)}${range.includes('M') ? 'M' : 'B'}`;
    }
  }
  return '-';
};

const parseMonthlyVisits = (range) => {
  if (range === '-') {
    return range; // Return '-' as it is
  } else if (range.includes(' to ')) {
    const [minStr, maxStr] = range.split(' to ');
    const min = parseExactNumber(minStr);
    const max = parseExactNumber(maxStr);
    if (!isNaN(min) && !isNaN(max)) {
      const midpoint = (max - min) / 2 + min; // Calculate midpoint
      const randomAdd = Math.floor(Math.random() * 56) + 40; // Generate random number between 40 and 95
      const newValue = Math.min(midpoint + randomAdd, max); // Ensure the new value is not greater than max
      return formatValue(newValue);
    }
  } else {
    const value = parseExactNumber(range);
    if (!isNaN(value)) {
      return formatValue(value);
    }
  }
  return '-';
};

const parseExactNumber = (valueStr) => {
  let value = parseFloat(valueStr);
  if (valueStr.includes('K')) {
    value *= 1000; // Convert K to exact number
  } else if (valueStr.includes('M')) {
    value *= 1000000; // Convert M to exact number
  }
  return value;
};

const formatValue = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  } else {
    return `${value}`;
  }
};

export const StoreCard = ({ storeInfo }) => {
  const storeName = storeInfo[1] && storeInfo[1].includes(' ') ?
    storeInfo[1].toLowerCase().replace(/\s/g, '') :
    storeInfo[1];

  const revenue = parseRevenue(storeInfo[4]);
  const monthlyVisits = parseMonthlyVisits(storeInfo[5]);

  return (
    <div className='w-full px-32'>
      <div className='w-max h-20 border-2 border-grey rounded-lg bg-gray-50 shadow-md shadow-custom hover:scale-105 transform transition-transform duration-300 ease-out flex justify-start gap-x-12 items-center py-4 px-8'>

        <div className='flex justify-center items-center w-14 h-14 border-2 border-black rounded-full bg-tblue'>
          <p className='text-white text-3xl font-bold'>{storeInfo[0]}</p>
        </div>

        <div className='flex justify-start gap-x-12'>
          <Link to={`/store/${storeName}`}><p className='text-xl font-semibold'>{storeInfo[1]}</p></Link>
          <p className='text-lg'>{storeInfo[2]}</p>
          <p className='text-lg'>{storeInfo[3]}</p>
          <p className='text-lg'>{revenue}</p>
          <p className='text-lg'>{monthlyVisits}</p>
        </div>

      </div>
    </div>
  );
};

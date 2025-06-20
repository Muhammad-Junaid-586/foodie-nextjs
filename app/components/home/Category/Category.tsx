'use client';
import React from 'react';

const foodCategories = [
  { name: 'Pizza' },
  { name: 'Burgers' },
  { name: 'Pasta' },
  { name: 'BBQ' },
  { name: 'Seafood' },
  { name: 'Salads' },
  { name: 'Desserts' },
  { name: 'Drinks' },
  { name: 'Sandwiches' },
  { name: 'Soups' },
  { name: 'Chinese' },
  { name: 'Indian' },
  { name: 'Mexican' },
  { name: 'Turkish' },
  { name: 'Breakfast' },
];

const Category = () => {
  return (
    <div className='pt-16 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <h1 className='text-xl sm:text-3xl text-center font-extrabold text-gray-800 dark:text-white'>
        🍽 Popular Categories by Food
      </h1>

      <div className='w-[90%] max-w-6xl mx-auto mt-10'>
        <div  className="flex flex-wrap gap-4 justify-center">
          {foodCategories.map((category, i) => (
            <button
            data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay={i*100}
              key={i}
              className="
                px-6 py-3 rounded-full font-medium text-sm sm:text-base shadow 
                transition-all duration-300 border 
                bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-700 
                hover:bg-emerald-600 hover:text-white hover:border-emerald-600
              "
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

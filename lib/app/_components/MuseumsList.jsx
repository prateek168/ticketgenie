import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import museumsList from '../hardCodedData/popularMuseums.js'; // Update the path if necessary

function MuseumsList({ heading = 'Popular Museums' }) {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-2xl text-primary mb-6'>
        {heading}
      </h2>

      <div className='grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-6'>
        {museumsList.length > 0 ? museumsList.map((museum) => (
          <div
            className='flex flex-col border rounded-lg p-4
            bg-green-100 text-zinc-800 shadow-md 
            transition-transform duration-300 ease-in-out
            hover:shadow-lg hover:bg-green-200 hover:scale-105'
            key={museum.id}
          >
            <Image
              src={museum.image}
              alt={museum.name}
              width={500}
              height={300}
              className='h-[200px] w-full object-cover rounded-lg mb-3'
            />
            <div className='flex flex-col flex-1'>
              <h2 className='text-xs bg-primary p-2 rounded-full
                text-white text-center mb-2'>
                {museum.category}
              </h2>
              <h3 className='font-semibold text-xl'>{museum.name}</h3>
              <p className='text-primary text-sm'>{museum.established}</p>
              <p className='text-gray-600 text-sm mb-4'>{museum.address}</p>
              <Link href={`/details/${museum.id}`} passHref>
                <p className='mt-auto block p-2 px-4 border border-primary
                  text-primary rounded-full text-center
                  text-sm
                  cursor-pointer
                  transition-colors duration-300 ease-in-out
                  hover:bg-primary hover:text-white'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        )) :
        // Skeleton Effect
        [1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div className='h-[300px] bg-zinc-700 
            w-full rounded-lg animate-pulse'
            key={item}
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default MuseumsList;

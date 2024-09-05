import { Button } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import MuseumHomepageLogo from '../assets/museumHomepage.jpg';

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Museum Homepage Logo"
              src={MuseumHomepageLogo}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl  text-zinc-800">
            <div>No Queues,</div> <div className="text-primary"> Just Culture and Discovery</div>
            </h2>

            <p className="mt-4 text-gray-600">
              Welcome to our museum's online chatbot-based ticketing system. Say goodbye to long queues and
              booking errors with our efficient, multilingual solution that ensures a smooth and error-free
              experience, from gate entry to special exhibitions.
            </p>

            <Button className="mt-7">Book Your Tickets</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

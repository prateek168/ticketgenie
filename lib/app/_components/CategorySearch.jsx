"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import art from "../assets/icons/art.png";
import science from "../assets/icons/science.png";
import archaeologica from "../assets/icons/archaeological.png";
import historical from "../assets/icons/historical.png";
import military from "../assets/icons/military.png";
import general from "../assets/icons/museum.png";
import { data } from "../hardCodedData/data.js"; 

const categoryList = [
  { name: "Art", icon: art },
  { name: "Science", icon: science },
  { name: "Archaeological", icon: archaeologica },
  { name: "Historical", icon: historical },
  { name: "Military", icon: military },
  { name: "General", icon: general },
];

const CategorySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMuseums, setFilteredMuseums] = useState(data || []);

  useEffect(() => {
    if (!data) {
      console.error("Museums list is not loaded.");
      return;
    }
    const filtered = data.filter((museum) =>
      museum.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMuseums(filtered);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-10 items-center flex flex-col gap-4">
      <h2 className="font-bold text-5xl tracking-wide text-secondary">
        Search <span className="text-primary">Museums</span>
      </h2>
      <h2 className="text-gray-500 text-2xl">
        Explore museums across India with one click
      </h2>

      <div className="flex w-full max-w-md items-center space-x-4">
        <Input
          type="text"
          placeholder="Search..."
          className="text-lg"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button type="submit">
          <Search className="h-5 w-5 mr-2" /> Search
        </Button>
      </div>

      {/* Display Search Results */}
      {searchTerm && (
        <div className="mb-10 px-8">
          <div className="grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 gap-6">
            {filteredMuseums.length > 0 ? (
              filteredMuseums.map((museum) => (
                <div
                  className="relative flex flex-col border rounded-lg p-4
                  bg-green-100 text-zinc-800 shadow-md 
                  transition-transform duration-300 ease-in-out
                  hover:shadow-lg hover:bg-green-200 hover:scale-105"
                  key={museum.id}
                >
                  <Image
                    src={museum.image}
                    alt={museum.name}
                    width={500}
                    height={300}
                    className="h-[200px] w-full object-cover rounded-lg mb-3"
                  />
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="text-xs bg-primary p-2 rounded-full
                      text-white text-center">
                      {museum.category}
                    </h2>
                    <h3 className="font-semibold text-xl">{museum.name}</h3>
                    <p className="text-primary text-sm">{museum.established}</p>
                    <p className="text-gray-600 text-sm mb-4">{museum.address}</p>
                    <Link href={`/details/${museum.id}`} passHref>
                      <p className="absolute bottom-0 left-0 w-full p-2 border border-primary
                        text-primary rounded-full text-center
                        text-sm
                        cursor-pointer
                        transition-colors duration-300 ease-in-out
                        bg-green-200 hover:bg-primary hover:text-white">
                        Learn More
                      </p>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No results found.</p>
            )}
          </div>
        </div>
      )}

      {/* Display List of Categories */}
      <div className="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-3 lg:grid-cols-6">
        {categoryList.map((item, index) => (
          <Link
            href={`/search/${item.name.toLowerCase()}`}
            key={index}
            className="flex flex-col text-center items-center p-6 bg-green-50 rounded-lg cursor-pointer gap-4 hover:scale-110 transition-transform ease-in-out shadow-md"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={60}
              height={60}
              className="mb-4"
            />
            <label className="text-primary text-lg font-semibold">
              {item.name}
            </label>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;

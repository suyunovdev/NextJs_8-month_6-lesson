"use client"; // Agar Next.js 13 bilan App Router ishlatilsa

import React, { useState } from "react";
import Link from "next/link";

const data = {
  products: [
    {
      id: 1,
      title: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    },
    {
      id: 2,
      title: "United States of America",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington, D.C.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/640px-Flag_of_the_United_States_%28Pantone%29.svg.png",
    },
    {
      id: 3,
      title: "Brazil",
      population: "211,049,000",
      region: "South America",
      capital: "Brasília",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    },
    {
      id: 4,
      title: "Uzbekistan",
      population: "34,233,000",
      region: "Central Asia",
      capital: "Tashkent",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
    },
    {
      id: 5,
      title: "Afghanistan",
      population: "38,928,000",
      region: "South Asia",
      capital: "Kabul",
      image:
        "https://cdn.britannica.com/40/5340-050-AA46700D/Flag-Afghanistan.jpg",
    },
    {
      id: 6,
      title: "Åland Islands",
      population: "30,000",
      region: "Europe",
      capital: "Mariehamn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
    },
    {
      id: 7,
      title: "Albania",
      population: "2,827,000",
      region: "Europe",
      capital: "Tirana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3oC2fAPycTMRBwivt_59S07mU48t--9m8Q&s",
    },
    {
      id: 8,
      title: "Algeria",
      population: "44,178,000",
      region: "Africa",
      capital: "Algiers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AXjU6yAF43uaFGcyZew1WRxpfRCVb3bgEw&s",
    },
  ],
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = data.products.filter(product => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion
      ? product.region === selectedRegion
      : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-gray-100"}>
      <div className="min-h-screen p-8">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-10 gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 shadow-lg outline-none rounded-md bg-blue-500 text-white dark:bg-blue-700">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="p-3 shadow-lg outline-none rounded-md flex-grow"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select
                className="p-3 shadow-lg outline-none rounded-lg flex-shrink-0"
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="South America">South America</option>
                <option value="Central Asia">Central Asia</option>
                <option value="Africa">Africa</option>
                <option value="South Asia">South Asia</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/CountryDetails/${product.id}`}
                    className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-white dark:bg-gray-800 cursor-pointer">
                    <img
                      className="w-full h-48 object-cover"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                        {product.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        <strong>Population:</strong> {product.population}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        <strong>Region:</strong> {product.region}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-1">
                        <strong>Capital:</strong> {product.capital}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-4 text-gray-500 dark:text-gray-300">
                  No countries found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

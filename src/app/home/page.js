"use client";
import { useState } from "react";
import Link from "next/link";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

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
      nativeName: "Deutschland",
      borderCountries: ["France", "Poland", "Czech Republic"],
      topLevelDomain: ".de",
      currencies: ["Euro"],
      languages: ["German"],
    },
    {
      id: 2,
      title: "United States of America",
      population: "323,947,000",
      region: "Americas",
      capital: "Washington, D.C.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States.svg",
      nativeName: "United States",
      borderCountries: ["Canada", "Mexico"],
      topLevelDomain: ".us",
      currencies: ["USD"],
      languages: ["English"],
    },
    {
      id: 3,
      title: "France",
      population: "67,413,000",
      region: "Europe",
      capital: "Paris",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      nativeName: "France",
      borderCountries: [
        "Belgium",
        "Luxembourg",
        "Germany",
        "Switzerland",
        "Italy",
        "Spain",
        "Andorra",
        "Monaco",
      ],
      topLevelDomain: ".fr",
      currencies: ["Euro"],
      languages: ["French"],
    },
    {
      id: 4,
      title: "Canada",
      population: "37,742,154",
      region: "Americas",
      capital: "Ottawa",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
      nativeName: "Canada",
      borderCountries: ["United States"],
      topLevelDomain: ".ca",
      currencies: ["CAD"],
      languages: ["English", "French"],
    },
    {
      id: 5,
      title: "Brazil",
      population: "213,993,000",
      region: "Americas",
      capital: "Brasília",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
      nativeName: "Brasil",
      borderCountries: [
        "French Guiana",
        "Suriname",
        "Guyana",
        "Venezuela",
        "Colombia",
        "Peru",
        "Bolivia",
        "Paraguay",
        "Argentina",
        "Uruguay",
      ],
      topLevelDomain: ".br",
      currencies: ["BRL"],
      languages: ["Portuguese"],
    },
    {
      id: 6,
      title: "China",
      population: "1,411,778,724",
      region: "Asia",
      capital: "Beijing",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Flag_of_China.svg",
      nativeName: "中国",
      borderCountries: [
        "Mongolia",
        "Russia",
        "North Korea",
        "South Korea",
        "Japan",
        "Vietnam",
        "Laos",
        "Myanmar",
        "India",
        "Nepal",
        "Bhutan",
        "Pakistan",
        "Afghanistan",
        "Tajikistan",
        "Kyrgyzstan",
        "Kazakhstan",
      ],
      topLevelDomain: ".cn",
      currencies: ["CNY"],
      languages: ["Chinese"],
    },
    {
      id: 7,
      title: "Japan",
      population: "126,226,000",
      region: "Asia",
      capital: "Tokyo",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
      nativeName: "日本",
      borderCountries: ["None"],
      topLevelDomain: ".jp",
      currencies: ["JPY"],
      languages: ["Japanese"],
    },
    {
      id: 8,
      title: "Australia",
      population: "25,788,215",
      region: "Oceania",
      capital: "Canberra",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
      nativeName: "Australia",
      borderCountries: ["None"],
      topLevelDomain: ".au",
      currencies: ["AUD"],
      languages: ["English"],
    },
  ],
};

export default function Home() {
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
    <div className={darkMode ? "dark bg-gray-900 text-white" : ""}>
      <div className="header shadow-sm flex justify-between items-center p-8">
        {" "}
        <h1 className="text-3xl">Where in the world?</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 shadow-lg outline-none rounded-md bg-blue-500 text-white dark:bg-blue-700">
          {darkMode ? <FaRegSun /> : <FaMoon />}
        </button>
      </div>
      <div className="min-h-screen p-8">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-10 gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-3 shadow-lg outline-none rounded-md flex-grow bg-gray-100 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select
                className="p-3 shadow-lg outline-none rounded-lg flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:text-white"
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <Link
                    href={`/country-details/${product.id}`}
                    key={product.id}>
                    <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-white dark:bg-gray-800 cursor-pointer">
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
}

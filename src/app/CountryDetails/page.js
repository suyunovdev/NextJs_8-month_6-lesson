"use client"; // Agar Next.js 13 bilan App Router ishlatilsa

import React from "react";
import { useRouter } from "next/router";

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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/640px-Flag_of_the_United_States_%28Pantone%29.svg.png",
      nativeName: "United States",
      borderCountries: ["Canada", "Mexico"],
      topLevelDomain: ".us",
      currencies: ["USD"],
      languages: ["English"],
    },
    // Qo'shimcha ma'lumotlar
  ],
};

const CountryDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const country = data.products.find(c => c.id === parseInt(id));

  if (!country) return <p>Country not found.</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex">
            <img
              className="w-48 h-32 object-cover rounded-lg"
              src={country.image}
              alt={country.title}
            />
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {country.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Native Name:</strong> {country.nativeName}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Population:</strong> {country.population}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Capital:</strong> {country.capital}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Border Countries:</strong>{" "}
                {country.borderCountries.join(", ")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Top Level Domain:</strong> {country.topLevelDomain}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Currencies:</strong> {country.currencies.join(", ")}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <strong>Languages:</strong> {country.languages.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

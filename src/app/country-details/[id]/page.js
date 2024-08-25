"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const data = {
  country: [
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

export default function CountryDetails() {
  const router = useRouter();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const id = parseInt(router.query?.id || "", 10);
    if (!isNaN(id)) {
      const foundCountry = data.country.find(product => product.id === id);
      setCountry(foundCountry || null);
    }
  }, [router.query?.id]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{country.title}</h1>
      <img
        className="w-full h-64 object-cover mb-4"
        src={country.image}
        alt={country.title}
      />
      <p className="text-lg mb-2">
        <strong>Native Name:</strong> {country.nativeName}
      </p>
      <p className="text-lg mb-2">
        <strong>Population:</strong> {country.population}
      </p>
      <p className="text-lg mb-2">
        <strong>Region:</strong> {country.region}
      </p>
      <p className="text-lg mb-2">
        <strong>Capital:</strong> {country.capital}
      </p>
      <p className="text-lg mb-2">
        <strong>Top Level Domain:</strong> {country.topLevelDomain}
      </p>
      <p className="text-lg mb-2">
        <strong>Currencies:</strong> {country.currencies.join(", ")}
      </p>
      <p className="text-lg mb-2">
        <strong>Languages:</strong> {country.languages.join(", ")}
      </p>
      <p className="text-lg mb-2">
        <strong>Border Countries:</strong> {country.borderCountries.join(", ")}
      </p>
    </div>
  );
}

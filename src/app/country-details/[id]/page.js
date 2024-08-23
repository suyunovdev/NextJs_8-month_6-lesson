"use client";
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
    // Boshqa mamlakatlar
  ],
};

export default function CountryDetails() {
  const router = useRouter();
  const { id } = router.query;
  const country = data.products.find(p => p.id === parseInt(id));

  if (!country) return <p>Country not found!</p>;

  return (
    <div className="p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            src={country.image}
            alt={country.title}
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {country.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Native Name:</strong> {country.nativeName}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Population:</strong> {country.population}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Sub Region:</strong> {country.subRegion}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Capital:</strong> {country.capital}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Border Countries:</strong>{" "}
              {country.borderCountries.join(", ")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Top Level Domain:</strong> {country.topLevelDomain}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Currencies:</strong> {country.currencies.join(", ")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              <strong>Languages:</strong> {country.languages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

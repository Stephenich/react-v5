import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const Dropdown = ({ id, options = [], label, value, onChange }) => (
  <label htmlFor={id}>
    {label}
    <select
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onChange}
      disabled={!options.length}
    >
      <option>All</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </label>
);

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useDropdown("");
  const [breed, setBreed] = useDropdown("");
  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    //    setBreeds([]);
    //    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreedOptions(breedStrings);
    }, console.error);
    console.log(animal);
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <Dropdown
          label="Animal"
          options={ANIMALS}
          id={"animal"}
          onChange={setAnimal}
          value={animal}
        />
        <Dropdown
          label="Breed"
          options={breedOptions}
          id={breed}
          onChange={setBreed}
          value={breed}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

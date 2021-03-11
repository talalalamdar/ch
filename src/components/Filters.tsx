import React, { ChangeEvent } from 'react';
import countriesCodes from '../data/countries';
import '../styles/filters.css'

type FiltersType = {
  onQueryChange: (query: string) => void;
  onCountryChange: (countryCode: string) => void;
};

function Filters(props: FiltersType) {

  function handleQueryChange(event: React.FormEvent<HTMLInputElement>) {
    props.onQueryChange(event.currentTarget.value);
  }

  function handleCountrySelected(event: ChangeEvent<HTMLSelectElement>) {
    props.onCountryChange(event.target.value);
  }

  function renderCountriesOptions() {
    const options: Array<JSX.Element> = [];

    countriesCodes.forEach(country => {
      options.push(
        <option key={country.code} value={country.code}  className="form__element__option">
          { country.name }
        </option>
      )
    })

    return options;
  }

  return (
    <div className="filters">
      <div className="form__element">
        <label className="form__element__label">Channel:</label>

        <input className="form__element__input" placeholder="Enter search query" onChange={handleQueryChange} />
      </div>

      <div className="form__element">
        <label className="form__element__label">Country:</label>

        <select className="form__element__select" defaultValue="" onChange={handleCountrySelected} placeholder="All countries">
          <option value="">All countries</option>

          {renderCountriesOptions()}
        </select>
      </div>
    </div>
  );
}

export default Filters;

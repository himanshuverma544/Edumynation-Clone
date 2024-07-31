import { Icon } from '@iconify/react';

import Select from '../../../../general/Select';

const schoolTypes = [
  "Boarding",
  "Day Scholar"
];

const locations = [
  "India",
  "Dubai",
  "USA",
  "Australia",
  "New Zealand",
  "South Africa"
];

export default function SearchBox() {
  
  return (
    <div className="search-box bg-white rounded-xl px-5 py-1">
      <form onSubmit={event => event.preventDefault()}>
        <div className="school-select w-[60vw] flex flex-col items-center justify-between sm:w-[75vw] sm:flex-row sm:relative">
          <div className="input-group w-[inherit] flex justify-between items-center px-1 sm:justify-start">
            <div className="input-with-icon-wrapper flex justify-center items-center">
              <Icon icon="solar:home-2-linear"/>
              <Select options={schoolTypes}/>
            </div>
          </div>
          <hr className="divider w-full h-[3px] border-tertiaryLight sm:w-[2.5rem] sm:absolute sm:left-[29.25%] sm:rotate-90"/>
          <div className="input-group w-[inherit] flex justify-between items-center px-1 sm:justify-start">
            <div className="input-with-icon-wrapper flex justify-center items-center">
              <Icon className="text-lg" icon="system-uicons:location"/>
              <Select options={locations}/>
            </div>
          </div>
          <button
            className="px-8 py-1 my-3 rounded-lg bg-primaryBlue text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

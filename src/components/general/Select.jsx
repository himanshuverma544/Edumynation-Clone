import { useState, useEffect, useRef } from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';


const Select = ({ className, options }) => {

  const [selected, setSelected] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);


  const handleOptionClick = (option) => {
    setSelected(option);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className={`${className} relative inline-block`} ref={selectRef}>
      <div
        className="wrapper flex justify-between items-center cursor-pointer bg-white lg:w-[12vw] xl:w-[15vw]"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="select-selected w-full py-2 px-4 text-black">
          {selected}
          <span
            className={`
              absolute top-1/2 right-4 transform -translate-y-1/2
              border-solid border-transparent border-t-6 border-l-6 border-r-6
              ${showOptions ? 'rotate-180' : ''}
            `}
          />
        </div>
        <div className="down-arrow text-xs me-5 font-semibold">
          <Icon icon="solar:alt-arrow-down-linear"/>
        </div>
      </div>
      {showOptions && (
        <div className="select-items absolute top-[131%] left-0 right-0 bg-white z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className={`py-2 px-4 text-black cursor-pointer hover:bg-secondaryLight ${selected === option ? 'bg-primaryLight' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

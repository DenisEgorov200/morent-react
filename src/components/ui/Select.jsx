import { useRef, useState } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside.js';

import { ArrowDown2 } from 'iconsax-react';

export const Select = ({ placeholder, options }) => {
  const selectRef = useRef();
  useOnClickOutside(selectRef, () => setIsOpen(false));
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClickOption = (option) => {
    setSelectedOption(option.label);
  };

  return (
    <div className="relative flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <p className="text-secondary-300 text-xs mr-2 max-md:m-0">{selectedOption || placeholder}</p>
      <ArrowDown2 size="14" />
      {isOpen && (
        <ul
          className="absolute top-[20px] w-full flex flex-col bg-white shadow-2xl overflow-hidden rounded-[10px]"
          ref={selectRef}>
          {options.map((option) => (
            <li
              key={option.id}
              className="p-2 hover:bg-primary-100"
              onClick={() => onClickOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

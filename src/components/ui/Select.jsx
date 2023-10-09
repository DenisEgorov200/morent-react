import { ArrowDown2 } from 'iconsax-react';
import { useState } from 'react';

export const Select = ({ placeholder, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <p className="text-secondary-300 text-xs mr-2">{placeholder}</p>
      <ArrowDown2 size="14" />
      {isOpen && (
        <div className="absolute top-[20px] flex flex-col p-2 bg-white border-2 border-primary-100">
          <p>Moscow</p>
          <p>Krasnodar</p>
          <p>Nizny Novgorod</p>
        </div>
      )}
    </div>
  );
};

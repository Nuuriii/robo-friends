import { useState } from 'react';

interface searchValue {
  onSearchValue: (search: string) => void;
}

export const SearchBox = ({ onSearchValue }: searchValue) => {
  const [value, setValue] = useState('');

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const FilterValue = e.target.value;
    setValue(FilterValue);
    onSearchValue(FilterValue);
  };

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={HandleChange}
        placeholder='search robots'
      />
    </div>
  );
};

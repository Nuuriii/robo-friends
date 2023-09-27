import { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

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
    <Box m={'3rem 0rem'}>
      <Input
        p={'1rem'}
        fontSize={'1rem'}
        border={'none'}
        outline={'2px solid black'}
        borderRadius={'0.3rem'}
        _focus={{
          outline: '3px solid black',
        }}
        type='text'
        value={value}
        onChange={HandleChange}
        placeholder='search robots'
      />
    </Box>
  );
};

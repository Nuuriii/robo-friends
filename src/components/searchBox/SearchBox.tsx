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
        fontFamily={'mono'}
        fontSize={'1rem'}
        border={'none'}
        borderRadius={'0.3rem'}
        _focus={{
          outline: 'none',
        }}
        type='text'
        value={value}
        onChange={HandleChange}
        placeholder='search robots'
      />
    </Box>
  );
};

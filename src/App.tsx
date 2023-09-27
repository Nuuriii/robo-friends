import { useState } from 'react';
import { SearchBox } from './components/searchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
import { Robots } from './components/CardList/robots';
import { Flex, Heading } from '@chakra-ui/react';

export const App = () => {
  const [searchField, setSearchField] = useState<string>('');

  const filteredRobots = Robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  const handleSearchChange = (searcValue: string) => {
    setSearchField(searcValue);
  };

  return (
    <Flex
      p={'3rem 0'}
      backgroundColor={'#2F1C48'}
      fontFamily={'mono'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading as={'h2'} color={'#fff'}>
        Robo Friends
      </Heading>
      <SearchBox onSearchValue={handleSearchChange} />
      <CardList robots={filteredRobots} />
    </Flex>
  );
};

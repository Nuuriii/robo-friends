import { useState } from 'react';
import { SearchBox } from './components/searchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
import { Robots } from './components/CardList/robots';
import { Flex } from '@chakra-ui/react';

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
      backgroundColor={'#15012D'}
      fontFamily={'mono'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <h1>Robo Friends</h1>
      <SearchBox onSearchValue={handleSearchChange} />
      <CardList robots={filteredRobots} />
    </Flex>
  );
};

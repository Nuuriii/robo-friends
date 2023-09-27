import { useState } from 'react';
import { SearchBox } from './components/searchBox/SearchBox';
import { CardList } from './components/CardList/CardList';
import { Robots } from './components/CardList/robots';

export const App = () => {
  const [searchField, setSearchField] = useState<string>('');

  const filteredRobots = Robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  const handleSearchChange = (searcValue: string) => {
    setSearchField(searcValue);
  };

  return (
    <div>
      <h1>Robo Friends</h1>
      <SearchBox onSearchValue={handleSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

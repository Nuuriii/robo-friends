import { SearchBox } from './components/searchBox/SearchBox';
import { CardList } from './components/CardList/CardList';

export const App = () => {
  return (
    <div>
      <h1>Robo Friends</h1>
      <SearchBox />
      <CardList />
    </div>
  );
};

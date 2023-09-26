import { Card } from '../Card/Card';
import { Robots } from './robots';

export const CardList = () => {
  return (
    <>
      {Robots.map((user, i) => (
        <Card key={i} id={user.id} name={user.name} email={user.email} />
      ))}
    </>
  );
};

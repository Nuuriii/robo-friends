import { Card } from '../Card/Card';

interface Robot {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface CardListProps {
  robots: Robot[];
}

export const CardList = ({ robots }: CardListProps) => {
  return (
    <>
      {robots.map((user) => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </>
  );
};

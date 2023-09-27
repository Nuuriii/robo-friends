import { Card } from '../Card/Card';
import { Grid } from '@chakra-ui/react';

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
    <Grid
      width={'80%'}
      backgroundColor={'green.800'}
      templateColumns={'repeat(auto-fit, minmax(255px, 1fr))'}
      templateRows={'repeat(6, 400px)'}
      gap={15}
    >
      {robots.map((user) => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </Grid>
  );
};

import { Card } from './components/Card/Card';
import { Robots } from './components/Card/robots';

export const App = () => {
  return (
    <>
      <Card id={Robots[0].id} name={Robots[0].name} email={Robots[0].email} />
      <Card id={Robots[1].id} name={Robots[1].name} email={Robots[1].email} />
      <Card id={Robots[2].id} name={Robots[2].name} email={Robots[2].email} />
      <Card id={Robots[3].id} name={Robots[3].name} email={Robots[3].email} />
    </>
  );
};

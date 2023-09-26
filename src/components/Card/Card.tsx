interface CardProps {
  id: number;
  name: string;
  email: string;
}

export const Card = ({ id, name, email }: CardProps) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

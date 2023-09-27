import { Flex, Heading, Image } from '@chakra-ui/react';

interface CardProps {
  id: number;
  name: string;
  email: string;
}

export const Card = ({ id, name, email }: CardProps) => {
  return (
    <Flex
      flexDirection={'column'}
      bg={'skyblue'}
      borderRadius={'0.7rem'}
      alignItems={'center'}
      justifyContent={'space-around'}
      _hover={{
        transform: 'scale(1.050)',
      }}
    >
      <Image
        height={'15rem'}
        width={'15rem'}
        src={`https://robohash.org/${id}`}
        alt='robots'
      />
      <div>
        <Heading as={'h4'}>{name}</Heading>
        <p>{email}</p>
      </div>
    </Flex>
  );
};

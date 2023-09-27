import { Flex, Heading, Image } from '@chakra-ui/react';

interface CardProps {
  id: number;
  name: string;
  email: string;
}

export const Card = ({ id, name, email }: CardProps) => {
  return (
    <Flex
      height={'22rem'}
      flexDirection={'column'}
      backgroundColor={'indigo'}
      border={'1px solid #fff'}
      borderRadius={'0.7rem'}
      alignItems={'center'}
      justifyContent={'space-around'}
      color={'white'}
      transition={'all 0.2s'}
      _hover={{
        transform: 'scale(1.030)',
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

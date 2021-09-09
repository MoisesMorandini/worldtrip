import { Flex, Text, Image } from '@chakra-ui/react'
import Link from 'next/link';
interface CarouselItemProps {
  continentId: number
  imagePath: string;
  name: string;
  description: string;
}

export function CarouselItem({ continentId, description, name, imagePath }: CarouselItemProps) {
  return (
    <Link href={`continents/${continentId}`} passHref>
      <Flex direction='column' justifyContent='center' alignItems='center'
        width={['375px', '720px', '720px', '1080px', '1240px']}
        h={['250px', '250px', '350px', '400px', '450px']} cursor='pointer'
        zIndex='1'>
        <Image src={imagePath} alt={name} position='absolute'
          zIndex='-1' opacity='0.85' />

        <Text color='white' fontWeight='700' lineHeight={['36px', '72px']}
          fontSize={['24px', '32px', '40px', '48px']} >
          {name}
        </Text>
        <Text color='gray.200' fontWeight='700'
          fontSize={['14px', '16px', '20px', '24px']} mt='16px'
          lineHeight={['21px', '25px', '31px', '36px']} >
          {description}
        </Text>
      </Flex>
    </Link >
  )
}
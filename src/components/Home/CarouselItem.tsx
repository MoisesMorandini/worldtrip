import { Flex, Text, Image } from '@chakra-ui/react'

interface CarouselItemProps {
  imagePath: string;
  title: string;
  text: string;
}

export function CarouselItem({ text, title, imagePath }: CarouselItemProps) {
  return (
    <Flex direction='column' justifyContent='center' alignItems='center'
      width={['375px', '720px', '720px', '1080px', '1240px']}
      h={['250px', '250px', '350px', '400px', '450px']}
      zIndex='1'
    >
      <Image src={imagePath} alt={title} position='absolute'
        zIndex='-1' opacity='0.85'
      />

      <Text color='white' fontWeight='700'
        fontSize={['24px', '32px', '40px', '48px']} lineHeight={['36px', '72px']}>
        {title}
      </Text>
      <Text color='gray.200' fontWeight='700' fontSize={['14px', '16px', '20px', '24px']}
        lineHeight={['21px', '25px', '31px', '36px']} mt='16px'>
        {text}
      </Text>
    </Flex>
  )
}
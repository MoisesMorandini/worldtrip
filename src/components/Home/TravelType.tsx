import { Flex, FlexProps, Text, Image, useMediaQuery } from '@chakra-ui/react'

interface TravelTypeProps extends FlexProps {
  imagePath: string;
  imageAlt: string;
  type: string;
}

export function TravelType({ imagePath, imageAlt, type, ...rest }: TravelTypeProps) {
  const [isLargarThan870] = useMediaQuery("(min-width: 870px)");
  const ellipsePath = './images/icons/ellipse.png'

  if (isLargarThan870) {
    return (
      <Flex direction='column' align='center' justifyContent='center'>
        <Image src={imagePath} alt={imageAlt}
          w='85px' h='85px' />
        <Text color='gray.600'
          mt='24px'
          fontWeight={['500', '600']} fontSize={['18px', '24px']} lineHeight={['27px', '36px']}>
          {type}
        </Text>
      </Flex>
    )
  }

  return (
    <Flex direction='row' align='center' justifyContent='center'  {...rest}>
      <Image src={ellipsePath} alt={imageAlt}
        w='8px' h='8px' />
      <Text color='gray.600' ml='8px'
        fontWeight={['500']} fontSize={['18px']} lineHeight={['27px']}>
        {type}
      </Text>
    </Flex>
  )
}
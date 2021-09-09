import { Flex, Text, Image } from '@chakra-ui/react'

interface BannerProps {
  continentName: string;
  imagePath: string;
}

export function Banner({ continentName, imagePath }: BannerProps) {
  return (
    <Flex color='white'
      width={['375px', '375px', '720px', '920px', '1080px', '1440px']}
      h={['150px', '250px', '350px', '450px', '500px']}
      alignItems={{ base: 'center', md: 'end' }} justifyContent={{ base: 'center', md: 'start' }}
      m={{ base: '0', sm: '0 auto' }}
    >
      <Image src={imagePath} alt={continentName}
        width={['375px', '375px', '720px', '920px', '1080px', '1440px']}
        h={['150px', '250px', '350px', '450px', '500px']}
        position='absolute'
        zIndex='-1' opacity='0.85'
      />
      <Text color='white' fontSize={['28px', '48px']} fontWidth='600'
        lineHeight={['42px', '52px', '62px', '72px']}
        m={{ base: '0', md: '0 0 59px 140px' }}
      >
        {continentName}
      </Text>
    </Flex>
  )
}
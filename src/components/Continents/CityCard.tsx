import { Flex, Text, Image } from '@chakra-ui/react';
interface CityCardProps {
  cityName: string;
  cityImagePath: string;
  countryName: string;
  countryIconPath: string;
}

export function CityCard({ cityName, cityImagePath, countryName, countryIconPath }: CityCardProps) {
  return (
    <Flex width="256px" h={['279px']} direction='column'
      border="1px" borderColor='yellow'
      borderRadius='4px'
      m={['auto']}
    >
      <Image src={cityImagePath} alt={cityName} w='100%' h='173px' />
      <Flex direction='row' alignItems='center' justifyContent='space-between'
        m={['18px 24px auto 24px']}
      >
        <Flex direction='column' fontWeight='600'
          fontSize={['20px']} lineHeight={['25px']}
        >
          <Text color='gray.600'>
            {cityName}
          </Text>
          <Text mt={['12px']} color='gray.500' fontWeight='500'
            fontSize={['16px']} lineHeight={['26px']}
          >
            {countryName}
          </Text>
        </Flex>
        <Image src={countryIconPath} alt={countryName} w='30px' h='30px' />
      </Flex>
    </Flex>
  )
}
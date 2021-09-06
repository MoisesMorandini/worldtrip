import { Flex } from '@chakra-ui/react'
import { TravelType } from './TravelType';

export function TravelTypes() {

  const imagePath = './images/icons';
  return (
    <Flex minWidth='275px' maxWidth='1160px' h='145px' align='center' justifyContent='space-between' flexWrap='wrap'
      m={['2.25em 3.125em 0', '2.25em 3.125em 0', '2.3em 6.75em 0', '5.3em 8.75em 0']}  >
      <TravelType imagePath={`${imagePath}/cocktail.png`} imageAlt='cocktail' type='vida noturna' />
      <TravelType imagePath={`${imagePath}/surf.png`} imageAlt='surf' type='praia' />
      <TravelType imagePath={`${imagePath}/building.png`} imageAlt='building' type='moderno' />
      <TravelType imagePath={`${imagePath}/museum.png`} imageAlt='museum' type='clássico' />
      <TravelType imagePath={`${imagePath}/earth.png`} imageAlt='earth' type='e mais...' m={["0 auto", '0']} />
    </Flex>
  )
}
import { Stack, Image, Text } from '@chakra-ui/react'

interface BannerProps {
  isLargarThan1280?: boolean;
}

export function Banner({ isLargarThan1280 = false }: BannerProps) {
  return (
    <Stack position="relative" h={['163px', '250px', '335']} spacing="1.25em" pl={['1em', '3em', '6em', '8.75em']}
      backgroundImage="url('./images/Background.png')">
      <Text as="h1" maxWidth="426px" mt={['1.4em', '2em', '2.22em']} color="white"
        fontWeight="500" fontSize={['20px', '28px', '36px']} lineHeight={['30px', '42px', '54px']}>
        5 Continentes,<br /> infinitas possibilidades.
      </Text>
      <Text as="h2" maxWidth="524px" color="gray.200"
        fontWeight="400" fontSize={['14px', '17px', '20px']} lineHeight={['21px', '25px', '30px']}>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      {isLargarThan1280 && <Image src="./images/Airplane.png" alt="Airplane" w="417px" h="270px"
        position="absolute" top='4.75em' right="8.75em" transform={"rotate(3deg)"} />}
    </Stack>
  )
}
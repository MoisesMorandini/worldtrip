import { Flex, Text, } from '@chakra-ui/react'

export function LetsGoMessage() {
  return (
    <Flex direction="column" alignItems="center" mt={['24px', '52px']}>
      <Text as="h2" color='gray.600'
        fontSize={['20px', '24px', '28px', '36px']} fontWeight='500'
        lineHeight={['30px', '36px', '42px', '54px']}>
        Vamos nessa?
      </Text>
      <Text as="h2" color='gray.600'
        fontSize={['20px', '24px', '28px', '36px']} fontWeight='500'
        lineHeight={['30px', '36px', '42px', '54px']}>
        Então escolha seu continente
      </Text>
    </Flex>

  )
}
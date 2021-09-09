import { Box, Text } from '@chakra-ui/react';

interface InfoProps {
  quantity: number;
  type: string;
}

export function Info({ quantity, type }: InfoProps) {
  return (
    <Box align={{ base: 'start', sm: 'center' }}>
      <Text color='yellow' fontWeight='600' fontSize={['24px', '36px', '36px', '48px']}
        lineHeight={['36px', '54px', '54px', '72px']}>
        {quantity}
      </Text>
      <Text color='gray.600' fontWeight='400' fontSize={['18px', '21px', '21px', '24px']}
        lineHeight={['27px', '31px', '31px', '36px']}>
        {type}
      </Text>
    </Box>
  )
}
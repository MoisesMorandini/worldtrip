import { Box, Text } from '@chakra-ui/react';

interface InfoProps {
  quantity: number;
  type: string;
}

export function Info({ quantity, type }: InfoProps) {
  return (
    <Box align='center'>
      <Text color='yellow' fontWeight='600' fontSize={['48px']}
        lineHeight={['72px']}>
        {quantity}
      </Text>
      <Text color='gray.600' fontWeight='600' fontSize={['24px']}
        lineHeight={['36px']}>
        {type}
      </Text>
    </Box>
  )
}
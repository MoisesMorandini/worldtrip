import { Text, Box } from '@chakra-ui/react';

interface InfoProps {
  description: string;
}

export function Bio({ description }: InfoProps) {
  return (
    <Box maxWidth='600px' >
      <Text h='211px' color='gray.600' fontSize={['24px']}
        fontWeight={[400]} lineHeight={['36px']}
        textOverflow='clip' overflow='hidden'
      >
        {description}
      </Text>
    </Box>
  )
}
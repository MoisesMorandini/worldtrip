import { Text, Box } from '@chakra-ui/react';

interface BioProps {
  description: string;
}

export function Bio({ description }: BioProps) {
  return (
    <Box maxWidth='600px' >
      <Text h='211px' color='gray.600' fontSize={['14px', '24px']}
        lineHeight={['21px', '36px']} fontWeight={[400]}
        textOverflow='clip' overflow='hidden' textAlign='justify'
      >
        {description}
      </Text>
    </Box>
  )
}
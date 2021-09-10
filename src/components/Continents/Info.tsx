import { Box, Text, Tooltip, Flex, Image } from '@chakra-ui/react';

interface InfoProps {
  quantity: number;
  type: string;
  info?: string;
}

export function Info({ quantity, type, info }: InfoProps) {
  return (
    <Box align={{ base: 'start', sm: 'center' }} mr='10px' >
      <Text color='yellow' fontWeight='600' fontSize={['24px', '36px', '36px', '48px']}
        lineHeight={['36px', '54px', '54px', '72px']}>
        {quantity}
      </Text>
      <Flex alignItems='center'>
        <Text color='gray.600' fontWeight='400' fontSize={['18px', '21px', '21px', '24px']}
          lineHeight={['27px', '31px', '31px', '36px']}>
          {type}
        </Text>
        {!!info &&
          <Tooltip label={info} aria-label="A tooltip">
            <Image src="/images/icons/info.svg" alt='tooltip'
              w='10px' h='10px' ml='5px' />
          </Tooltip>
        }
      </Flex>
    </Box>
  )
}
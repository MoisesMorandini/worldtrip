import { Flex, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface HeaderProps {
  backHome?: boolean;
}

export function Header({ backHome = false }: HeaderProps) {
  return (
    <Flex maxWidth="1440px" h={["50px", '75px', '100px']} align="center" justifyContent="left">
      {backHome &&
        <Box position="absolute" left={['1em', '4em', '8.75em', '19em']}>
          <Link href="/" passHref>
            <Image src="/images/icons/back.svg" alt="back" cursor="pointer"
              w={['1em', '1.5em', '2em']} h={['1em', '1.5em', '2em']}
            />
          </Link>
        </Box>
      }
      <Image src="/images/Logo.png" alt="Worldtrip" m="0 auto"
        w={['5.06em', '8.28em', '11.5em']}
        h={['1.25em', '2.06em', '2.875em']}

      />

    </Flex>
  );
}
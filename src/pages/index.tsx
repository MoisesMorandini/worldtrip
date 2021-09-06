import { Flex, Stack, Image, Text, useMediaQuery } from '@chakra-ui/react'

import Head from 'next/Head'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner';

export default function Home() {
  const [isLargarThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Flex direction="column" maxWidth="1440px" m="0 auto">
        <Header />
        <Banner isLargarThan1280={isLargarThan1280} />
      </Flex>
    </>
  )
}

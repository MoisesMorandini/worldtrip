import { GetStaticProps } from 'next';

import { Flex, Divider, useMediaQuery } from '@chakra-ui/react'

import Head from 'next/Head'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner';
import { TravelTypes } from '../components/Home/TravelTypes';
import { LetsGoMessage } from '../components/Home/LetsGoMessage';
import { Carousel } from '../components/Home/Carousel';

interface HomeProps {
  continents: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  const [isLargarThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Flex direction="column" maxWidth="1440px" m={['0 auto 24px', '0 auto 32px', '0 auto 40px']}>
        <Header backHome />
        <Banner isLargarThan1280={isLargarThan1280} />
        <TravelTypes />

        <Divider orientation="horizontal" alignSelf="center" width='90px'
          bg="black" borderColor='gray.600' border='1px' mt={['2.25em', '3em', '4em', '5em']} />

        <LetsGoMessage />

        <Carousel continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/continents');
  const continents = await response.json();
  return {
    props: { continents }
  }
}

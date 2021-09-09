import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Box, Text } from '@chakra-ui/react';
import Head from 'next/Head'
import { Header } from '../../components/Header';
import { Banner } from '../../components/Continents/Banner';
import { Bio } from '../../components/Continents/Bio';
import { Info } from '../../components/Continents/Info';

interface ContinentProps {
  continent: {
    id: number;
    name: string;
    total_country: number;
    total_language: number;
    total_city: number;
    continent_image: string;
    description: string;
    cities: {
      id: number;
      name: string;
      city_image: string;
      country: string;
      country_icon: string;
    }[]
  }
}


export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title> {continent.name} | Worldtrip </title>
      </Head>

      <Flex direction='column' maxWidth='1440px' m={['0 auto 24px', '0 auto 32px', '0 auto 40px']}>
        <Header backHome />
        <Banner continentName={continent.name} imagePath={continent.continent_image} />

        <Flex direction={{ base: 'column', md: 'row' }} color='black'
          m={['24px 16px', '40px 50px', '60px 95px', '80px 140px']}>

          <Bio description={continent.description} />

          <Flex m={['16px 16px 16px 0', '16px auto', 'auto auto auto 70px']}
            width={['100%', '290px', '390px', '490px']}
            justifyContent='space-between' align='center'>
            <Info quantity={continent.total_country} type='países' />
            <Info quantity={continent.total_language} type='línguas' />
            <Info quantity={continent.total_city} type=' cidades +100' />
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/continents/1', '/continents/2', '/continents/3'],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:3333/continentsInfo/${id}`);
  const continent = await response.json();


  return {
    props: { continent }
  }
}

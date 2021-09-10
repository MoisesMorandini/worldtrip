import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Text, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/Head'
import { Header } from '../../components/Header';
import { Banner } from '../../components/Continents/Banner';
import { Bio } from '../../components/Continents/Bio';
import { Info } from '../../components/Continents/Info';
import { CityCard } from '../../components/Continents/CityCard';

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

      <Flex direction='column' maxWidth='1440px'
        m={['0 auto 24px', '0 auto 32px', '0 auto 40px']}
      >
        <Header backHome />
        <Banner continentName={continent.name} imagePath={continent.continent_image} />

        <Flex m={['24px 16px', '40px 50px', '60px 95px', '80px 140px']}
          direction='column'>
          <Flex direction={{ base: 'column', md: 'row' }} color='black'          >
            <Bio description={continent.description} />
            <Flex m={['16px 16px 16px 0', '16px auto', 'auto auto auto 70px']}
              width={['100%', '375px', '375px', '490px']}
              justifyContent='space-between' align='flex-start'>
              <Info quantity={continent.total_country} type='países' />
              <Info quantity={continent.total_language} type='línguas' />
              <Info quantity={continent.cities.length}
                type={`cidades +${continent.total_city - continent.cities.length}`}
                info={`Exibimos ${continent.cities.length} cidades abaixo. Porém, temos um total de ${continent.total_city} cidades `}
              />
            </Flex>
          </Flex>


          <Flex mt={['80px']} direction='column'>
            <Text color='gray.600' fontWeight='500' fontSize={['36px']}
              lineHeight={['54px']}
            >
              Cidades +{continent.total_city - continent.cities.length}
            </Text>
            <SimpleGrid mt={['20px', '25px', '30px', '35px', '40px']} flex="1" gap={['1em', '1.6em', '2.1em', '2.81em']} minChildWidth="256px"
              rowGap={['20px', '26px', '32px', '40px', '48px']}
            >
              {continent.cities.map(city => {
                return (
                  <CityCard key={city.name} cityName={city.name} cityImagePath={city.city_image}
                    countryName={city.country} countryIconPath={city.country_icon}
                  />
                )
              })}
            </SimpleGrid>
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

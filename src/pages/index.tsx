import { Flex, Text, Box } from '@chakra-ui/react'
import Head from 'next/Head'
import { Header } from '../components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Flex direction="column" w={{ base: "375px", sm: "1440px" }} >
        <Header />

        <Text color="gray.600">aaaa</Text>
      </Flex>
    </>
  )
}

import { Flex } from '@chakra-ui/react'
import Head from 'next/Head'
import { Header } from '../components/Header'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>
      <Flex direction="column" maxWidth="1440px" m="0 auto">
        <Header />
        <Header backHome />
      </Flex>
    </>
  )
}

import { Box, Center, Spacer, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Disconnected from '../components/Disconnected'
import Connected from '../components/Connected'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {
  const { connection } = useConnection()
  const { connected, publicKey, sendTransaction } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box 
        w="full"
        h="calc(100vh)"
        bgImage={publicKey ? "" : "url(/Assets/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <NavBar />
          <Spacer />
          <Center>
            {connected ? <Connected /> : <Disconnected />}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a 
                href="https://redgraz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built by RedGraz
              </a>  
            </Box>
          </Center>
        </Stack>
      </Box> 
    </div>
  )
}

export default Home
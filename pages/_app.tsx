import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import type { AppProps } from "next/app"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { optimismSepolia, optimism } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import Header from "../components/Header"
import Footer from "../components/Footer"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    optimismSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [optimismSepolia] : []),
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp

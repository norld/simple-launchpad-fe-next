import "../styles/globals.css";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
const { chains, provider, webSocketProvider } = configureChains([chain.mainnet, chain.polygon], [publicProvider()]);
const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WagmiConfig>
  );
}

export default MyApp;

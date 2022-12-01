import "../styles/globals.css";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

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
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;

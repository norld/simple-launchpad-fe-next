import "../styles/globals.css";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { bsc, bscTestnet } from "@wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { CONFIG_CHAIN } from "src/configs/constants";
import { store } from "../redux/stores/index";
import { Provider } from "react-redux";
import Header from "src/components/layouts/header";
import Footer from "src/components/layouts/footer";
const { chains, provider, webSocketProvider } = configureChains(
  [CONFIG_CHAIN],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: CONFIG_CHAIN.rpcUrls.default.http[0],
      }),
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;

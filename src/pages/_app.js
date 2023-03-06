import { theme } from "@/chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;

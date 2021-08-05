import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { styledTheme, GlobalStyle } from "../styles/theme";
import { BaseCSS } from "styled-bootstrap-grid";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseCSS />
      <GlobalStyle />
      <ThemeProvider theme={styledTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;

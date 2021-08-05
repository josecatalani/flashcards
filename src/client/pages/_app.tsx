import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { styledTheme, GlobalStyle } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={styledTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp

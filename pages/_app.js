import {ThemeProvider} from "emotion-theming";
import theme from "../theme/default";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme} >
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
   
}

export default MyApp

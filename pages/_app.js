import GlobalStyles from '../styles/global.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />
     <Component {...pageProps} />
     </>
  )
}

export default MyApp

import MainContainer from '../components/MainContinar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer> 
      <Component {...pageProps} />
    </MainContainer>
  )

}

export default MyApp

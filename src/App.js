import Header from './components/Header/Header'
import Footer from './components/Footer'
import BackToTopBtn from './components/Buttons/BackToTopBtn'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Work from './components/Sections/Work'
import Contact from './components/Sections/Contact'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import backgroundImg from './assets/images/background1.svg'

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat repeat'
      }}
    >
      <Header />

      <Container>
        <About />
        <Skills />
        <Work />
        <Contact />
      </Container>
      <BackToTopBtn />
      <Footer />
    </Box>
  )
}

export default App

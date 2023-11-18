import './App.css';
import { Header, Container, Footer } from './sections';
import { Home, About, Service, Work, Contact, BackToTop } from './components'

function App() {
  return (
    <div className='body'>
      <Header />
      <Container>
        <BackToTop />
        <Home />
        <About />
        <Service />
        <Work />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

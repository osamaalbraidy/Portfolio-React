import './App.css';
import { Header, Container, Footer } from './sections';
import MainPages from './pages/MainPage/MainPages';
import WorksPage from './pages/WorksPage/WorksPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Cursor from './components/Cursor/Cursor';
=======
>>>>>>> cf26256b2b839f3b47ce55256e75d447cc374d09

function App() {
  return (
    <div className='body'>
      <Router>
        <Header />
        <Container>
<<<<<<< HEAD
          <Cursor />
=======
>>>>>>> cf26256b2b839f3b47ce55256e75d447cc374d09
          <Routes>
            <Route path="Portfolio-React/" element={<MainPages />} />
            <Route path="Portfolio-React/Works" element={<WorksPage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

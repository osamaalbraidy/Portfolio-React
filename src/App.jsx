import './App.css';
import { Header, Container, Footer } from './sections';
import MainPages from './pages/MainPage/MainPages';
import WorksPage from './pages/WorksPage/WorksPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <Router>
        <Header />
        <Container>
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

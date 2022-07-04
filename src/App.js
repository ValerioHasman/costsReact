import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contato from './components/pages/Contato';
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/Projetos';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/novoprojeto' element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

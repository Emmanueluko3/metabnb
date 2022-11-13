

import NavSection from './components/navbar';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Mininav from './components/mini-nav';

function App() {
  return (
    <>
      <NavSection />
      <Mininav />
      <Home />
      <Footer />
    </>
  );
}

export default App;

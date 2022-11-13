import React, { useState } from 'react';
import NavSection from './components/navbar';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Mininav from './components/mini-nav';
import Appmodal from './components/modal';

function App() {
  const [modalState, setModalState] = useState(false);

  const triggerModal = () => {
    setModalState(!modalState)
    console.log('modalState', modalState)
    console.log('triggered', true)
  }

  return (
    <>
      <NavSection methods={{connectWalletAction: triggerModal}} />
      <Appmodal showState={modalState} />
      <Mininav />
      <Home />
      <Footer />
    </>
  );
}

export default App;

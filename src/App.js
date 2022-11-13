import React, { useState } from 'react';
import NavSection from './components/navbar';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Appmodal from './components/modal';
import PlaceToStay from './pages/place-to-stay';

function App() {
  const [modalState, setModalState] = useState(false);

  const triggerModal = () => {
    setModalState(!modalState)
  }

  return (
    <>
      <NavSection methods={{connectWalletAction: triggerModal}} />
      <Appmodal showState={modalState} />
      <PlaceToStay />
      <Home />
      <Footer />
    </>
  );
}

export default App;

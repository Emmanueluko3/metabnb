import React, { useState } from 'react';
import NavSection from './components/navbar';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Error from './pages/error';
import Appmodal from './components/modal';
import PlaceToStay from './pages/place-to-stay';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [modalState, setModalState] = useState(false);

  const triggerModal = () => {
    setModalState(!modalState)
  }

  return (
    <>

      <BrowserRouter>
        <NavSection methods={{connectWalletAction: triggerModal}} />
        <Appmodal showState={modalState} />
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/places" element={ <PlaceToStay /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>

        <Footer />
      </BrowserRouter>      
    </>
  );
}

export default App;

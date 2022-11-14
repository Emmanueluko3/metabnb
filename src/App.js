import React, { useState } from 'react';
import NavSection from './components/navbar';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import Error from './pages/error';
import Appmodal from './components/modal';
import PlaceToStay from './pages/place-to-stay';
import {
  Routes,
  Route, 
  BrowserRouter 
  as Router
} from "react-router-dom";

function App() {
  const [modalState, setModalState] = useState(false);

  const triggerModal = () => {
    setModalState(!modalState)
  }

  return (
    <>

      <Router>
        <NavSection methods={{connectWalletAction: triggerModal}} />
        <Appmodal showState={modalState} />
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <PlaceToStay /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>

        <Footer />
      </Router>      
    </>
  );
}

export default App;

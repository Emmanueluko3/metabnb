import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.svg'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Metamaskc from '../img/metamask-colored.svg'
import WalletConnect from '../img/wallet-connect.svg'

function NavSection() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="d-flex justify-content-between">
        <Navbar.Brand href="#"><img src={Logo} alt="Metabnb" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="fw-400 fs-20 me-3 text-pink">Home</Nav.Link>
            <Nav.Link href="#action2" className="fw-400 fs-20 me-3 text-pink">Place to stay</Nav.Link>
            <Nav.Link href="#action2" className="fw-400 fs-20 me-3 text-pink">NFTs</Nav.Link>
            <Nav.Link href="#action2" className="fw-400 fs-20 me-3 text-pink">Community</Nav.Link>
          </Nav>
          <Button className="bg-pink-hover ps-4 pe-4" onClick={handleShow}>Connect wallet</Button>
        </Navbar.Collapse>

        <Modal 
          show={show} 
          onHide={handleClose} 
          centered 
          className="border border-0"
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Connect Wallet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="fw-semibold">Choose your preferred wallet:</p>
            <div className="card p-1 my-2 shadow-sm pointer">
              <div className="d-flex justify-content-between align-items-center px-2">
                  <div className="d-flex justify-contents-between align-items-center">
                    <img src={Metamaskc} alt="metamask" className="me-2" />
                    <h3 className="fw-bold">Metamask</h3>
                  </div>
                   <i className="fa-solid fa-chevron-right"></i>
              </div>
              
            </div>
            <div className="card p-1 my-2 shadow-sm pointer">
              <div className="d-flex justify-content-between align-items-center px-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <img src={WalletConnect} alt="metamask" className="me-2" />
                    <h3 className="fw-bold">WalletConnect</h3>
                  </div>
                   <i className="fa-solid fa-chevron-right"></i>
              </div>
              
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}

export default NavSection;
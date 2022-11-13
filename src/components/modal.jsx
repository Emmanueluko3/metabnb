import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Metamaskc from '../img/metamask-colored.svg'
import WalletConnect from '../img/wallet-connect.svg'

const { forwardRef, useRef, useImperativeHandle } = React;

function Appmodal({showState}) {
    const [show, setShow] = useState(showState ?? false);

    const toggleShow = () => setShow(!show);

    useEffect(() => {
        console.log('effect_show', showState)
        if (showState) {
            toggleShow()
            console.log('effect_show', showState)
        }
      }, [showState]);

    //const { forwardRef, useRef, useImperativeHandle } = React;

    return ( 
        <>
            <button onClick={toggleShow}>Modal</button>
            <Modal 
            show={show} 
            onHide={toggleShow} 
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
        </>
     );
}

export default Appmodal;
import Button from 'react-bootstrap/Button';
import Homelogo from '../img/home-logo.svg';
import Metamask from '../img/metamask.svg';
import Opensea from '../img/opensea.svg'
import Image3 from '../img/image 3.svg';
import Image4 from '../img/image 4.svg';
import Image5 from '../img/image 5.svg';
import Image6 from '../img/image 6.svg';
import Image7 from '../img/image 7.svg';
import Image8 from '../img/image 8.svg';
import Image9 from '../img/image 9.svg';
import Dommycard from '../components/cards';


function Home() {
    return ( 
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-pink fw-400 fs-56 mt-3">Rent a <span className="fw-bold">Place</span> away from</h2>
                        <h2 className="text-pink fw-400 fs-56 mb-3"><span className="fw-bold">Home</span> in the <span className="fw-bold">Metaverse</span></h2>
                        <p className="fs-24 text-pink mb-4">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                        <div className="input-group mb-5">
                            <input type="text" className="form-control" placeholder="Search for location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <Button className="bg-pink-hover ps-5 pe-5">Search</Button>
                        </div>
                    </div>
                    <div className="col-lg-6 px-5 text-center">
                        <div className="row">
                            <div className="col-lg-6 mt-5">
                                <div className="row">
                                    <img src={Image4} className="img-fluid col-lg-12 py-2 image-hover" alt="Avatar" />
                                    <img src={Image6} className="img-fluid col-lg-12 image-hover" alt="Avatar" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <img src={Image3} className="img-fluid col-lg-12 py-2 image-hover" alt="Avatar" />
                                    <img src={Image5} className="img-fluid col-lg-12 image-hover" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="container-fluid mt-3 mb-3 pt-3 pb-2 bg-pink">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 py-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Homelogo} alt="" />
                                <h3 className="fw-bold">MBToken</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Metamask} alt="" />
                                <h3 className="fw-semibold"> M E T A D A T A</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 py-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Opensea} alt="" />
                                <h3 className="fw-bold airbnb-font">OpenSea</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center py-3">
                <h2 className="fw-bold fs-1">Inspiration for your next adventure</h2>
                <div className="cards">
                    <div className="row text-center">
                        <div className="col-lg-3">
                            <Dommycard />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="container-fluid bg-pink text-white">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-lg-4 text-white">
                            <h3 className="fs-48 fw-400 py-3">Metabnb NFTs</h3>
                            <p className="fs-18 py-3">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                            <Button className="btn-light btn px-4 my-3 py-2">Learn more</Button>
                        </div>
                        <div className="col-lg-8 py-5">
                            <div className="position-absolute">
                                <img src={Image7} className="image-hover" alt="Avatar" />
                            </div>
                            <div className="position-absolute">
                                <img src={Image9} className="image-hover" alt="Avatar" />
                            </div>
                            <div className="position-absolute">
                                <img src={Image8} className="image-hover" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
     );
}

export default Home;
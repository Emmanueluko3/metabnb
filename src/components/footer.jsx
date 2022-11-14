import Logowhite from '../img/logo-white.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return ( 
        <>
                <div className="container-fluid bg-dark py-5">
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-3">
                                <a href="http://google.com" className="mb-5"><img src={Logowhite} alt="Metabnb" /></a>
                                <div className="mt-5 pt-5 d-flex">
                                    <a href="#" className="nav-link px-2"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" className="nav-link px-2"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#" className="nav-link px-2"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                                <div className="py-5">
                                    <p><i className="fa-regular fa-copyright me-1"></i>2022 Metabnb</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <a href="" className="nav-link"><h4 className="fw-semibold">Community</h4></a>
                                <div className="py-1"><a href="#" className="nav-link">NFT</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Tokens</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Landlord</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Discord</a></div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <a href="" className="nav-link"><h4 className="fw-semibold">Places</h4></a>
                                <div className="py-1"><a href="#" className="nav-link">Castle</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Farm</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Beach</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Learn more</a></div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <a href="" className="nav-link"><h4 className="fw-semibold">About Us</h4></a>
                                <div className="py-1"><a href="#" className="nav-link">Road map</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Creators</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Career</a></div>
                                <div className="py-1"><a href="#" className="nav-link">Contact Us</a></div>
                            </div>
                        </div>
                    </div>
                </div>    
        </>
     );
}

export default Footer;
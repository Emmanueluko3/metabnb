import Button from 'react-bootstrap/Button';
import Homelogo from '../img/home-logo.svg';
import Metamask from '../img/metamask.svg';
import Opensea from '../img/opensea.svg'
import Image3 from '../img/image 3.svg';
import Image4 from '../img/image 4.svg';
import Image5 from '../img/image 5.svg';
import Image6 from '../img/image 6.svg';
import NFTframes from '../img/nft-frames.svg';
import Dommycard from '../components/cards';
import Card1 from '../img/card1.svg';
import Card2 from '../img/card2.svg';
import Card3 from '../img/card3.svg';
import Card4 from '../img/card4.svg';
import Card5 from '../img/card5.svg';
import Card6 from '../img/card6.svg';
import Card7 from '../img/card7.svg';
import Card8 from '../img/card8.svg';


function Home() {

    const cardItems = [
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card1
        }, 
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card2 
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card3
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card4
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card5
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card6
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card7
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card8
        },
    ]

    const cards = cardItems.map((item, count) => (
        <div className="col-lg-3 col-md-6">
            <div className="d-flex justify-content-center">
                <Dommycard 
                key={item.toString() + '-' + count}
                title={item.title} 
                per_night={item.per_night}
                distance={item.distance}
                availability={item.availability}
                star_number={item.star_number}
                image={item.image} 
                />
            </div>
            
        </div>
    ))

    return ( 
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="text-pink fw-400 fs-56 mt-3">Rent a <span className="fw-bold">Place</span> away from</h2>
                        <h2 className="text-pink fw-400 fs-56 mb-3"><span className="fw-bold">Home</span> in the <span className="fw-bold">Metaverse</span></h2>
                        <p className="fs-24 text-pink mb-4">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                        <div className="input-group mb-5">
                            <input type="text" className="form-control" placeholder="Search for location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <Button className="bg-pink-hover ps-5 pe-5">Search</Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 px-5 text-center">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <div className="row">
                                    <img src={Image4} className="img-fluid col-lg-12 py-2 image-hover" alt="Avatar" />
                                    <img src={Image6} className="img-fluid col-lg-12 image-hover" alt="Avatar" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
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
                        <div className="col-lg-4 col-md-4 py-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Homelogo} alt="" />
                                <h3 className="fw-bold">MBToken</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 p-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Metamask} alt="" />
                                <h3 className="fw-semibold"> M E T A D A T A</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 py-2 d-flex justify-content-center">
                            <div className="d-flex flex-row align-items-center text-white">
                                <img src={Opensea} alt="" />
                                <h3 className="fw-bold airbnb-font">OpenSea</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center py-5">
                <h2 className="fw-bold fs-48px">Inspiration for your next adventure</h2>
                <div className="py-3">
                    <div className="row">
                        <>{cards}</>
                    </div>
                    
                </div>
            </div>

            <div className="container-fluid bg-pink text-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 text-white">
                            <h3 className="fs-48 fw-400 py-3">Metabnb NFTs</h3>
                            <p className="fs-18 py-3">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                            <Button className="btn-light btn px-4 my-3 py-2">Learn more</Button>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="nfts">
                                <img src={NFTframes} className="custom-height1" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
     );
}

export default Home;
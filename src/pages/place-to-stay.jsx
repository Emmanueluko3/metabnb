import Mininav from "../components/mini-nav";
import Dommycard from '../components/cards';
import Card1 from '../img/card5.svg';
import Card2 from '../img/card6.svg';
import Card3 from '../img/card7.svg';
import Card4 from '../img/card8.svg';
import Card5 from '../img/card1.svg';
import Card6 from '../img/card2.svg';
import Card7 from '../img/card3.svg';
import Card8 from '../img/card4.svg';
import Card9 from '../img/card9.svg';
import Card10 from '../img/card10.svg';
import Card11 from '../img/card11.svg';
import Card12 from '../img/card12.svg';
import Card13 from '../img/card13.svg';
import Card14 from '../img/card14.svg';
import Card15 from '../img/card15.svg';
import Card16 from '../img/card16.svg';

function PlaceToStay() {

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
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card9
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card10
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card11
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card12
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card13
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card14
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card15
        },
        {
            title: 'Desert King',
            per_night: '1MBT per night',
            distance: '2345km away',
            availability: 'available for 2weeks stay',
            star_number: 5,
            image:Card16
        },
    ]

    const cards = cardItems.map((item, index) => (
        <div key={item.toString() + '-' + index} className="col-lg-3 col-md-6">
            <div className="d-flex justify-content-center">
                <Dommycard                
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

    return ( <>
            <div className="container text-center py-5">
                <Mininav />
                <div className="py-3">
                    <div className="row">
                        <>{cards}</>
                    </div>
                    
                </div>
            </div>
    </> );
}

export default PlaceToStay;
import Card from 'react-bootstrap/Card';
import Card1 from '../img/card1.svg'

function Dommycard(props) {
    const {
        title,
        per_night,
        distance,
        availability,
        star_number,
        image,
    } = props;

    let stars =  [...Array(star_number).keys()];

    stars = stars.map(item => {
        return (<i className="fa-solid fa-star text-pink" key={item.toString()}></i>)
    });

    return (
        <>
            <Card className="my-3" style={{ width: '16rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={image} />
                    <div className="d-flex justify-content-between mt-1">
                        <p>{title}</p>
                        <h6 className="fw-bold">{per_night}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="fs-13px">{distance}</p>
                        <p className="fs-13px">{availability}</p>
                    </div>
                    <div className="d-flex">
                        <>{stars}</>
                    </div>
                </Card.Body>
            </Card>
        </>
      );
}

export default Dommycard;
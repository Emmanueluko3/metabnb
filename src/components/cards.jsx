import Card from 'react-bootstrap/Card';

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
        return (<i className="fa-solid fa-star text-pink me-2" key={item.toString()}></i>)
    });

    return (
        <>
            <Card className="my-3 pointer" style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={image} className="image-hover2" />
                    <div className="d-flex justify-content-between mt-1">
                        <p className="fs-12px">{title}</p>
                        <h6 className="fw-bold fs-12px">{per_night}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="fs-12px">{distance}</p>
                        <p className="fs-12px">{availability}</p>
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
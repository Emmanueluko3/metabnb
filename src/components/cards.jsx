import Card from 'react-bootstrap/Card';
import Card1 from '../img/card1.svg'

function Dommycard() {
  return (
    <Card className="my-3" style={{ width: '16rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={Card1} />
        <div className="d-flex justify-content-between mt-1">
            <p>Desert king</p>
            <h6 className="fw-bold">1MBT per night</h6>
        </div>
        <div className="d-flex justify-content-between">
            <p className="fs-13px">2345km away</p>
            <p className="fs-13px">available for 2weeks stay</p>
        </div>
        <div className="d-flex">
            <i className="fa-solid fa-star text-pink"></i>
            <i className="fa-solid fa-star text-pink"></i>
            <i className="fa-solid fa-star text-pink"></i>
            <i className="fa-solid fa-star text-pink"></i>
            <i className="fa-solid fa-star text-pink"></i>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Dommycard;
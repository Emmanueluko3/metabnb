import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.svg';
import { Link } from 'react-router-dom';



function NavSection(props) {

  let {
    methods
  } = props;

  methods = {
    connectWalletAction() {

    },
    ...methods,
  }

  return (
    <>
      <Navbar 
        bg="white" 
        expand="lg"
        >
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt="Metabnb" className="img-fluid" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} className="fw-400 fs-20 me-3 custom-black link-hover">Home</Nav.Link>
              <Nav.Link as={Link} to={"/places"} className="fw-400 fs-20 me-3 custom-black link-hover">Place to stay</Nav.Link>
              <Nav.Link href="" className="fw-400 fs-20 me-3 custom-black link-hover">NFTs</Nav.Link>
              <Nav.Link href="" className="fw-400 fs-20 me-3 custom-black link-hover">Community</Nav.Link>
            </Nav>
            <Button className="bg-pink-hover ps-4 pe-4" onClick={() => { methods.connectWalletAction() }}>Connect wallet</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;
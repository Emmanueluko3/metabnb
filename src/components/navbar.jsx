import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.svg'



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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><img src={Logo} alt="Metabnb" className="img-fluid" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
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
            <Button className="bg-pink-hover ps-4 pe-4" onClick={() => { methods.connectWalletAction() }}>Connect wallet</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;
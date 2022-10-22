import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TAAS CURRENCY INFO</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='col'>
          <h4>Useful Links</h4>
          <h5>About</h5>
          <h5>Trade Today</h5>
      </div>
      <div className='col'>
        <h4>Newsletter</h4>
        <input type="text" placeholder='Enter Your email address'></input>

      </div>
      <div className='col'>
        <h4>Contact</h4>
        <h5>Add social media icons</h5>

      </div>
    </div>
  );
}

export default Footer;
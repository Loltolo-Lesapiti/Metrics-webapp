import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './details.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import back from '../../images/back.jpg';

const CurrencyExchange = () => {
  const currencies = useSelector((state) => state.currency.currency);
  const { currencyName } = useParams();

  const navigate = useNavigate();

  return (
    <>
      {currencies
        /* eslint-disable */
        .filter((currency) => {
          if (currencyName === currency.bid) {
            return currency;
          }
        })
        .map((data) => (
          <Card className="text-center $green-100">
            <Navbar bg="bright" variant="dark" className="mainnav">
              <Container className="nav">
                <Button variant="cyan-600 cont" onClick={() => navigate("/")}>
                  <div className="backBtn">
                    <img className="back" alt="Back arrow image" src={back} />
                  </div>
                </Button>
                <Navbar.Brand href="#home" id="navText">
                  TAAS CURRENCY INFO
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Card.Body className="text" id="cardBody">
              <div className="cardHome"></div>
              <Card.Text>
                <ListGroup>
                  <h4>Currency Information</h4>
                  <ListGroup.Item id="listDetails" action variant="light">
                    <h5>Currency</h5>
                    <h5>{data.ticker}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="dark">
                    <h5>Bid</h5>
                    <h5>{data.bid}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="light">
                    <h5>Ask</h5>
                    <h5>{data.ask}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="dark">
                    <h5>Open</h5>
                    <h5>{data.open}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="light">
                    <h5>Low</h5>
                    <h5>{data.low}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="dark">
                    <h5>High</h5>
                    <h5>{data.high}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="light">
                    <h5>Changes</h5>
                    <h5>{data.changes}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item id="listDetails" action variant="dark">
                    <h5>Date</h5>
                    <h5>{data.date}</h5>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CurrencyExchange;

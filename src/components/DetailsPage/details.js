import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
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
                <Table striped bordered hover size="md" className="fs-5">
                  <thead>
                    <tr>
                      <th>Currency Details</th>
                      <th>Figures as it stands</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ticker</td>
                      <td>{data.ticker}</td>
                    </tr>
                    <tr>
                      <td>Bid</td>
                      <td>{data.bid}</td>
                    </tr>
                    <tr>
                      <td>Ask</td>
                      <td>{data.ask}</td>
                    </tr>
                    <tr>
                      <td>Open</td>
                      <td>{data.open}</td>
                    </tr>
                    <tr>
                      <td>Low</td>
                      <td>{data.low}</td>
                    </tr>
                    <tr>
                      <td>High</td>
                      <td>{data.high}</td>
                    </tr>
                    <tr>
                      <td>Changes</td>
                      <td>{data.changes}</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{data.date}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CurrencyExchange;

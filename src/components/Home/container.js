import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import './container.css';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { fetchCurrencies } from '../../Redux/forexslice';
import Slider from './slider';
import slide3 from '../../images/money.jpg';
// import back from '../../images/back.jpg';

export default function Forexcontainer() {
  const [searchInput, setSearchInput] = useState('');
  const currencies = useSelector((state) => state.currency.currency);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    currencies.filter((currency) => currency.ticker.match(searchInput));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  return (
    <>
      <Slider />
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search by currency name i.e USD"
          className="me-2 search"
          aria-label="Search"
          onChange={handleChange}
          value={searchInput}
        />
      </Form>
      {/* eslint-disable */}
      <Row xs={1} m={2} md={3} sm={2} xs={2} className="g-4 ms-2">
        {currencies
          .filter((currency) => {
            if (searchInput === "") {
              return currency;
            }
            if (
              currency.ticker
                .toLowerCase()
                .includes(searchInput.toLocaleLowerCase())
            ) {
              return currency;
            }
          })
          .slice(0, 6)
          .map((currency) => (
            <Col>
              <Link
                className="nounderline"
                to={`/CurrencyExchange/${currency.bid}`}
              >
                <Card>
                  {/* <div className="imageBody"> */}
                  <Card.Img variant="top" className="cardImage" src={slide3} />

                  {/* <img
                      className="backArrow"
                      alt="Back arrow image"
                      src={back}
                    />
                  </div> */}
                  <Card.Body className="cardbady">
                    <Card.Title>{currency.ticker}</Card.Title>
                    <Card.Text className="cardtext">
                      The bidding price is {currency.bid}. Click on the currency
                      to view more details.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
}


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import "./container.css";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchRockets } from "../Redux/forexslice";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import cardImage from '../images/forex.jpg'

export default function Forexcontainer() {
const [searchInput, setSearchInput]=useState("");
const currencies = useSelector((state) => state.currency.currency);
// An event handler and a condition that matches what has been entered in the search bar.
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
    currencies.filter((currency) => {
      return currency.ticker.match(searchInput);
  });
  }
    

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
    return (
      <>
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                    value={searchInput}
                  />
                </Form>
        <Row xs={1} md={3} className="g-4">
          {currencies.filter((currency) => {
                            if (searchInput == '') {
                                return currency;
                            } if (currency.ticker.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
                                return currency;
                            }
                        }).map((currency) => (
            <Link to={`/CurrencyExchange/${currency.bid}`}>
            <Col>
              <Card>
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>{currency.ticker}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Link>
          ))}
        </Row>
        </>
      );
  }
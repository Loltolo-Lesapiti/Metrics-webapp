import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Forexcontainer = () => {
  const currency = [
    {
      ticker: 'EUR/USD',
      bid: '0.98384',
      ask: '0.98384',
      open: '0.97861',
      low: '0.97049',
      high: '0.98680',
      changes: 0.005344314895617323,
      date: '2022-10-21 14:33:05',
    },
  ];
  return (
    <BrowserRouter>
      <h3>Currency Exchange</h3>
      <ListGroup key={currency.bid}>
        {currency.map((i) => (
          <ListGroup.Item key={i.id}>
            <Card>
              <Card.Body className="cardbady">
                <Card.Title>{currency.ticker}</Card.Title>
                <Card.Text className="cardtext">
                  The bidding price is
                  {' '}
                  {currency.bid}
                  . Click on the currency to
                  view more details.
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Forexcontainer;

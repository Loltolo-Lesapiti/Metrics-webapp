import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Details = () => {
  const currencies = [
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
    {
      ticker: 'USD/JPY',
      bid: '148.246',
      ask: '148.246',
      open: '150.152',
      low: '146.183',
      high: '151.947',
      changes: -0.012693803612339348,
      date: '2022-10-21 14:33:05',
    },
  ];

  return (
    <BrowserRouter>
      <h3>Currency Displays</h3>
      <ListGroup>
        {currencies.map((data) => (
          <ListGroup.Item key={data.bid}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Currency Details</th>
                  <th>Figures as it stands</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ticker</td>
                  <td>{data.ticker}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bid</td>
                  <td>{data.bid}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ask</td>
                  <td>{data.ask}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Open</td>
                  <td>{data.open}</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Low</td>
                  <td>{data.low}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>High</td>
                  <td>{data.high}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Change</td>
                  <td>{data.change}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Date</td>
                  <td>{data.date}</td>
                </tr>
              </tbody>
            </Table>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Details;

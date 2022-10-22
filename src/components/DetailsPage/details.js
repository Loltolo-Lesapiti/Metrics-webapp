import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navbar/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./details.css";
import back from "../../images/back.jpg";

const CurrencyExchange = () => {
  const currencies = useSelector((state) => state.currency.currency);
  const { currencyName } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      {currencies
        .filter((currency) => {
          if (currencyName === currency.bid) {
            return currency;
          }
        })
        .map((data) => {
          return (
            <Card className="text-center $green-100">
              <Card.Body className="text">
                <Card.Text>
                  <h3>
                    Explore the rates and click the back button to view more
                  </h3>
                  <Table striped bordered hover size="md" className="fs-3">
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
                        <td>Changes</td>
                        <td>{data.changes}</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Date</td>
                        <td>{data.date}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="cyan-600 cont" onClick={() => navigate("/")}>
                  <div className="backBtn">
                    <img className="back" src={back} />
                    <h3>Back</h3>
                  </div>
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
    </>
  );
};

export default CurrencyExchange;

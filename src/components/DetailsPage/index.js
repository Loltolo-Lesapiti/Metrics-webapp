import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CurrencyExchange = () => {
  const currencies = useSelector((state) => state.currency.currency);
  const { currencyName } = useParams();
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
          <div>
            <h4>Currency Information</h4>

            <h5>Currency</h5>
            <h5>{data.ticker}</h5>

            <h5>Bid</h5>
            <h5>{data.bid}</h5>

            <h5>Ask</h5>
            <h5>{data.ask}</h5>

            <h5>Open</h5>
            <h5>{data.open}</h5>

            <h5>Low</h5>
            <h5>{data.low}</h5>
            <h5>High</h5>
            <h5>{data.high}</h5>
            <h5>Changes</h5>
            <h5>{data.changes}</h5>
            <h5>Date</h5>
            <h5>{data.date}</h5>
          </div>
        ))}
    </>
  );
};

export default CurrencyExchange;

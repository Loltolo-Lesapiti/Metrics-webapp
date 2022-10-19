
import { useParams } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CurrencyExchange = () => {
  const currencies = useSelector((state) => state.currency.currency);
  const { currencyName } = useParams();

  const navigate=useNavigate();

  return (
<>
{currencies.filter((currency)=>{
    if(currencyName===currency.bid){
        return currency;
    }

}).map((data)=>{
    return (
<div key={data.bid}>
    <button onClick={()=>navigate("/")}>BACK</button>
    <h1>{data.ticker}</h1>
    <h1>{data.ticker}</h1>
    <h1>{data.ticker}</h1>
    <h1>{data.ticker}</h1>
    <h1>{data.ticker}</h1>
</div>
    )
})}

</>
  )}

  export default CurrencyExchange;
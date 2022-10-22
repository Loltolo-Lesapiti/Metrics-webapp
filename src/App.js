import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Forexcontainer from './components/Home/container';
import CurrencyExchange from './components/DetailsPage/details';
import Footer from './components/Navbar/footer';

function App() {
  const currencies = useSelector((state) => state.currency.currency);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forexcontainer list={currencies} />} />
        <Route path="/CurrencyExchange/:currencyName" element={<CurrencyExchange />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

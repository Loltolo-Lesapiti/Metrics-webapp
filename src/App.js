import React from "react";
import { Route, Routes } from 'react-router-dom';
import Forexcontainer from "./components/container"
import { useSelector } from "react-redux";
import Navigation from "./components/navbar";
import CurrencyExchange from "./components/details";

function App() {
  const currencies = useSelector((state) => state.currency.currency);
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Forexcontainer list={currencies} />} />
        <Route path="/CurrencyExchange/:currencyName" element={<CurrencyExchange />} />
      </Routes>
      
    </div>
  );
}

export default App;

import React from "react";
import { InputStyle, SelectStyle } from "./style/InputFormStyle";
import { useState, useEffect } from "react";

const InputForm = () => {
  const initialChosenAmount = 1;
  const initialChosenCurrency = "EUR";
  const initialCurrencies = [];
  const [chosenAmount, setChosenAmount] = useState(initialChosenAmount);
  const [chosenCurrency, setChosenCurrency] = useState(initialChosenCurrency);
  const [currencies, setCurrencies] = useState(initialCurrencies);
  const NBP_API = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";

  useEffect(() => {
    fetch(NBP_API)
      .then((response) => response.json())
      .then((data) => setCurrencies(data[0].rates))
      .catch((error) => console.log(error));
  }, []);

  const calculatedChosenCurrency = () => {
    const chosenCurrencyValue = currencies.find(
      ({ code }) => code === chosenCurrency
    )?.mid;
    return chosenAmount * chosenCurrencyValue;
  };

  const changeChosenAmount = (e) => setChosenAmount(e.target.value);
  const changeChosenCurrency = (e) => setChosenCurrency(e.target.value);

  return (
    <>
      <input
        style={InputStyle}
        type="number"
        onChange={changeChosenAmount}
        value={chosenAmount}
      />
      <select
        style={SelectStyle}
        onChange={changeChosenCurrency}
        value={chosenCurrency}>
        {currencies.map(({ code }) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
        ;
      </select>
      <div>to {calculatedChosenCurrency()}</div>
    </>
  );
};

export default InputForm;

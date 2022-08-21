import React, { Component } from 'react';
import { render } from 'react-dom';

import { CSVLink } from "react-csv";
import Async  from './components/Async ';

import './style.css';

const headers = [
  { label: "ID", key: "id" },
  { label: "key", key: "key" },
  { label: "Region", key: "region" },
  { label: "key Value", key: "key_value" },
  { label: "Expense", key: "expense_value" },
  { label: "Periode", key: "periode" },
  { label: "Resultat", key: "result" }


];



const data = [
  { id: "1", key: "EFFECTIFST TT", region: "TUNIS", keyvalue:" 0.131606877520696",expense_value:"6249667.2 ",result:"822499.1857355111",periode:"2021"}
  
];

const csvReport = {
  data: data,
  headers: headers,
  filename: 'profitability.csv'
};

function App() {
  return (
    <div className="App">
      <CSVLink {...csvReport}>Export to CSV</CSVLink><br /><br />
      <AsyncCSV />
    </div>
  );
}

render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

fetch('https://abiukb2b.vtexcommercestable.com.br/api/oms/pvt/orders/1073530282175-01', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-VTEX-API-AppKey': 'vtexappkey-abiukb2b-WOIZOK',
    'X-VTEX-API-AppToken': 'WYGIWBXADJRCLLJUSZWTGEMQEGQACSEVTUDGFPXEZNIECXRQQBMNZHKSMQDPKXYLFVIRIDPDCRUSVHOHPAKAFQWLJKUPLHTCPXZGOZHMMJLHNRXEBWZKNXFOZXHXJZRU'
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    debugger
    console.error(err);
  });

ReactDOM.render(<App />,
    document.querySelector(`#root`)
);





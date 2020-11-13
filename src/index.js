import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';


// const getData = async () => {
//   try {
//     const response = await fetch('https://abiukb2b.vtexcommercestable.com.br/api/oms/pvt/orders/1073530282175-01', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'X-VTEX-API-AppKey': 'vtexappkey-abiukb2b-WOIZOK',
//         'X-VTEX-API-AppToken': 'WYGIWBXADJRCLLJUSZWTGEMQEGQACSEVTUDGFPXEZNIECXRQQBMNZHKSMQDPKXYLFVIRIDPDCRUSVHOHPAKAFQWLJKUPLHTCPXZGOZHMMJLHNRXEBWZKNXFOZXHXJZRU'
//       }
//     })
//     if (!response.ok) {
//       throw new Error('Ответ сети был не ok.');
//     }
//     const  data = response.data;
//     console.log(data);
//   } catch (error) {
//     console.log('Возникла проблема с вашим fetch запросом: ', error.message);
//   }
// };
// getData();

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





import React from 'react';
import './App.css';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function App() {
  // window.paypal.Buttons().render('#paypall-btn')
  return (
    <>
      {/* <div id="paypall-btn">
      </div> */}
      <PayPalScriptProvider options={{ "client-id": "AV2sG0LhfJ-7W5B83X-Y5COB439khvH62wyQoODXTit-zZNkWSZlRYI-lzmQZvWzc_Gs6KPpRMZRir7B" }}>
        <PayPalButtons createOrder={(data, action) => {
          return action.order.create({
            purchase_units: [{
              amount: {
                value: "600.00"
              },
            },
            ],
          },
          );
        }}
          onApprove={(data, action) => {
            return action.order.capture().then((details) => {
              alert("transaction is completed bt");
            })
          }} />
      </PayPalScriptProvider>
      {/* <PayPalScriptProvider options={{ "client-id": "AV2sG0LhfJ-7W5B83X-Y5COB439khvH62wyQoODXTit-zZNkWSZlRYI-lzmQZvWzc_Gs6KPpRMZRir7B" }} >
        <PayPalButtons />
      </PayPalScriptProvider> */}
    </>
  );
}


export default App;

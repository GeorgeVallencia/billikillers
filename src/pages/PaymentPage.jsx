import { useRef } from "react";
import { useEffect } from "react";

function PaymentPage() {

  const paypal = useRef();

 useEffect(() => {
   window.paypal.Buttons({
    createOrder: (data, actions, err) => {
      return actions.order.create({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: 'monthly member',
            amount: {
              currency_code: 'USD',
              value: 3.89
            }
          }
        ]
      })
    },

    onApprove: async(data, actions) => {
      const order = await actions.order.capture();
      console.log(order);
    },

    onError: (err) => {
      console.log(err);
    }
  }).render(paypal.current);
 }, []);

  return(
    <div className="flex mt-10">
      <div ref={paypal} className="items-center mx-auto max-w-5xl" />
    </div>
  );
}

export default PaymentPage;

// import React from "react";
// import ReactDOM from "react-dom"
// const PayPalButton = paypal.Buttons.driver("react", {
//     React,
//     ReactDOM
// });

// function PaymentPage() {
//     const createOrder = async (data) => {
//         // Order is created on the server and the order id is returned
//         return await fetch("/my-server/create-paypal-order", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 // use the "body" param to optionally pass additional order information
//                 // like product skus and quantities
//                 body: JSON.stringify({
//                     cart: [{
//                         sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
//                         quantity: "YOUR_PRODUCT_QUANTITY",
//                     }, ],
//                 }),
//             })
//             .then((response) => response.json())
//             .then((order) => order.id);
//     };
//     const onApprove = async (data) => {
//         // Order is captured on the server and the response is returned to the browser
//         return await fetch("/my-server/capture-paypal-order", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     orderID: data.orderID
//                 })
//             })
//             .then((response) => response.json());
//     };
//     return ( <
//         PayPalButton createOrder = {
//             (data) => createOrder(data, actions)
//         }
//         onApprove = {
//             (data) => onApprove(data, actions)
//         }
//         />
//     );
// }

// export default PaymentPage;
import React from "react";
import { OrderSumCt } from "./Style";

const OrderSummary = () => {
  return (
    <div className="d-flex justify-content-center">
      <OrderSumCt>
        <p className="bold">Order Summary</p>
        <p>Subtotal: $15.9</p>
        <p className="borderBt">Shipping: $5.99</p>
        <p className="bold">Total: $21.89</p>
      </OrderSumCt>
    </div>
  );
};

export default OrderSummary;

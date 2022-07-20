import React from "react";
import {
  ButtonClick,
  ButtonClickBd,
  ButtonTwo,
} from "../../components/Button/Button";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { SubHeroCt } from "../../components/SubHero/style";
import { CheckoutBtnCt, CheckoutCt, CheckoutForm } from "./Style";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SubHeroCt>Checkout</SubHeroCt>
      <main className="py-3 px-4">
        <ButtonTwo to="/cart">Back to Cart</ButtonTwo>

        {/* Checkout info */}
        <CheckoutCt>
          <CheckoutForm>
            <form>
              <div className="mb-2 mt-3">
                <label for="fname" className="form-label mb-0">
                  First Name:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="lname" className="form-label mb-0">
                  Last Name:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="lname"
                  name="lname"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="email" className="form-label mb-0">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="address" className="form-label mb-0">
                  Street Address:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="city" className="form-label mb-0">
                  City:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="city"
                  name="city"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="state" className="form-label mb-0">
                  State:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="state"
                  name="state"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="zcode" className="form-label mb-0">
                  Zip Code:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="zcode"
                  name="zcode"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="card" className="form-label mb-0">
                  Credit Card Number:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="card"
                  name="card"
                />
              </div>
              <div className="mb-2 mt-3">
                <label for="expires" className="form-label mb-0">
                  Expires:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="expires"
                  name="expires"
                />
              </div>

              <CheckoutBtnCt>
                <ButtonClick type="submit" onClick={handleSubmit}>
                  Review Order
                </ButtonClick>
              </CheckoutBtnCt>
            </form>
          </CheckoutForm>

          {/* order summary */}
          <OrderSummary />
        </CheckoutCt>
      </main>
    </div>
  );
};

export default Checkout;

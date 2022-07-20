import React from "react";
import {
  ButtonClick,
  ButtonClickBd,
  ButtonIncDec,
  ButtonTwo,
} from "../../components/Button/Button";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { SubHeroCt } from "../../components/SubHero/style";
import { products } from "../../data";
import { CartButtonCt, CartContainer, CartIncDec, CartProduct } from "./Style";

const Cart = () => {
  return (
    <div>
      <SubHeroCt>Cart</SubHeroCt>

      <CartContainer>
        <ButtonTwo to="/shop">Continue shopping</ButtonTwo>
        <div className="pt-5">
          <h2>Your cart is currently empty...</h2>
        </div>

        {products.map((product) => {
          return (
            <CartProduct key={product.id}>
              <div className="imgCt">
                <img className="img-fluid" src={product.img} alt="" />
              </div>
              <div className="desc">
                <p>{product.description}</p>
              </div>

              <CartIncDec>
                <ButtonIncDec>-</ButtonIncDec>
                <span>Qty. 1</span>
                <ButtonIncDec>+</ButtonIncDec>
              </CartIncDec>
              <div>
                <p>${product.price}</p>
              </div>
              <div>
                <button>delete</button>
              </div>
            </CartProduct>
          );
        })}

        {/* clear and checkout */}
        <CartButtonCt>
          <ButtonClickBd>Clear Cart</ButtonClickBd>
          <ButtonTwo to="/checkout">Checkout</ButtonTwo>
        </CartButtonCt>
        {/* Order Summary */}
        <OrderSummary />
      </CartContainer>
    </div>
  );
};

export default Cart;

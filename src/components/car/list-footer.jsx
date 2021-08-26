import React, { Component } from "react";
import { formatCurrency, countNumber } from "@/util";

const countPrice = (items) => {
  return items.reduce((acc, cur) => {
    acc += cur.price * (cur.quantity || 1);
    return acc;
  }, 0);
};

export default class ListFooter extends Component {
  render() {
    const { currencyFormat = "$", data } = this.props;
    const totalPrice = countPrice(data);
    const totalInstallments = countNumber(data, "installments");
    return (
      <div>
        <div className="footer-item">
          <span className="footer-title">SUBTOTAL</span>
          <span className="text-align-right footer-text">
            {currencyFormat} {formatCurrency(totalPrice)}
          </span>
        </div>
        <div className="footer-item">
          <span></span>
          {!totalPrice || totalPrice === 0 ? null : (
            <span className="text-align-right footer-ins">
              OR UP TO {totalInstallments} x {currencyFormat}{" "}
              {formatCurrency(totalPrice / totalInstallments)}
            </span>
          )}
        </div>
        <div
          className="checkout-btn"
          onClick={() => {
            window.alert(`Total $ ${formatCurrency(totalPrice)}`);
          }}
        >
          CHECKOUT
        </div>
      </div>
    );
  }
}

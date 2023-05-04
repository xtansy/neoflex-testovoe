import "./Cart.scss";

import { useSelector } from "react-redux";

import { CartItems } from "./CartItems/CartItems";
import { cartTotalPriceSelector } from "@cart/selectors";

export const Cart = () => {
    const totalPrice = useSelector(cartTotalPriceSelector);
    return (
        <div className="cart">
            <h1 className="cart__title">Корзина</h1>
            <div className="cart__content">
                <CartItems />
                <div className="cart__content-total">
                    <div className="cart__content-total__text">
                        <h3>ИТОГО</h3>
                        <p>₽ {totalPrice}</p>
                    </div>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};


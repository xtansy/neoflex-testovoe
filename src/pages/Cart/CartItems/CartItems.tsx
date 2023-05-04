import "./CartItems.scss";

import { useSelector, useDispatch } from "react-redux";

import { cartItemsSelector } from "@cart/selectors";
import { HeadphoneCart } from "@components";
import { addItem, minusItem, removeItem } from "@redux/cart";

export const CartItems = () => {
    const cartItems = useSelector(cartItemsSelector);
    const dispatch = useDispatch();

    const onClickPlus = (item: Headphone) => {
        dispatch(addItem(item));
    }

    const onClickMinus = (id: Headphone["id"]) => {
        dispatch(minusItem(id));
    }

    const onClickRemove = (id: Headphone["id"]) => {
        dispatch(removeItem(id))
    }

    return (
        <div className="cart__content-items">
            {
                cartItems.map((item) => <HeadphoneCart key={item.id} {...item} onClickRemove={() => onClickRemove(item.id)} onClickMinus={() => onClickMinus(item.id)} onClickPlus={() => onClickPlus(item)} />)
            }
        </div>
    );
};


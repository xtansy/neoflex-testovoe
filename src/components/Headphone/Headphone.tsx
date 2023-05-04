import "./Headphone.scss";

import { useSelector, useDispatch } from "react-redux";

import { StarSvg } from "@svg";
import { cartItemsSelector } from "@cart/selectors";
import { Counter } from "@components";
import { minusItem } from "@redux/cart";

interface HeadphoneProps extends Headphone {
    onClickAdd: () => void;
}

export const Headphone: React.FC<HeadphoneProps> = ({ img, title, price, rate, onClickAdd, id }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);

    const existItem = cartItems.find(item => item.id === id);

    const onClickMinus = () => {
        dispatch(minusItem(id));
    }

    return (
        <div className="headphone">
            <img className="headphone__img" src={img} alt="img" />
            <div className="headphone__content">
                <div className="headphone__content-one">
                    <h2 className="headphone__content-one__name">{title}</h2>
                    <div className="headphone__content-one__price">{price} P</div>
                </div>
                <div className="headphone__content-two">
                    <div className="headphone__content-two__rating">
                        <StarSvg />
                        <p>{rate}</p>
                    </div>
                    {
                        existItem ? <Counter onClickPlus={onClickAdd} onClickMinus={onClickMinus} count={existItem.count} /> : <button onClick={onClickAdd} className="headphone__content-two__button">Купить</button>
                    }
                </div>
            </div>
        </div>
    );
};


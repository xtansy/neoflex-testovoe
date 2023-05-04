import "./HeadphoneCart.scss";

import { DeleteSvg } from "@svg";
import { Counter } from "@components";

interface HeadphoneCartProps extends CartItem {
    onClickPlus: () => void;
    onClickMinus: () => void;
    onClickRemove: () => void;
}

export const HeadphoneCart: React.FC<HeadphoneCartProps> = ({ img, title, price, count, onClickPlus, onClickMinus, onClickRemove }) => {
    return (
        <div className="headphone-cart">
            <div className="headphone-cart__content">
                <div className="headphone-cart__content-info">
                    <img src={img} alt="img" />
                    <div className="headphone-cart__content-info__text">
                        <h2>{title}</h2>
                        <p>{price} ₽</p>
                    </div>
                </div>
                <DeleteSvg onClick={onClickRemove} />
            </div>
            <div className="headphone-cart__footer">
                <Counter onClickMinus={onClickMinus} onClickPlus={onClickPlus} count={count} />
                <p className="headphone-cart__footer-price">{price * count} ₽</p>
            </div>
        </div>
    );
};


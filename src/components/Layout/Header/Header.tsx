import "./Header.scss";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartSvg, FavSvg } from "@svg";
import { ROUTES } from "@utils";
import { Logo } from "@ui";
import { cartItemsLengthSelector } from "@cart/selectors";

export const Header = () => {
    const navigate = useNavigate();
    const count = useSelector(cartItemsLengthSelector);

    const onClickCartLink = () => {
        navigate(ROUTES.CART);
    }
    return (
        <div className="header">
            <Logo />
            <div className="header__items">
                <FavSvg />
                <CartSvg count={count} onClick={onClickCartLink} />
            </div>
        </div>
    );
};


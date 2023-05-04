import "./Footer.scss";

import { useNavigate } from "react-router-dom";

import { GlobusSvg, VkSvg, TelegramSvg, WhatsupSvg } from "@svg";
import { Logo } from "@ui";
import { ROUTES } from "@utils";

export const Footer = () => {
    const navigate = useNavigate();

    const onClickCartLink = () => {
        navigate(ROUTES.CART);
    }

    return (
        <div className="footer">
            <Logo />
            <div className="footer__content">
                <ul className="footer__content-ul">
                    <li>Избранное</li>
                    <li onClick={onClickCartLink}>Корзина</li>
                    <li>Контакты</li>
                </ul>
                <div className="footer__content-descr">
                    <p>Условия сервиса</p>
                    <ul className="footer__content-descr__lang">
                        <li><GlobusSvg /></li>
                        <li className="footer__content-descr__lang-item footer__content-descr__lang-item_active">Рус</li>
                        <li className="footer__content-descr__lang-item">Eng</li>
                    </ul>
                </div>
            </div>

            <ul className="footer__links">
                <li><VkSvg /></li>
                <li><TelegramSvg /></li>
                <li><WhatsupSvg /></li>
            </ul>
        </div>
    );
};


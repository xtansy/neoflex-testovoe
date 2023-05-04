import "./Logo.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@utils";

export const Logo = () => {
    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate(ROUTES.HOME);
    }

    return <h1 className="logo" onClick={onClickLogo}>QPICK</h1>
};


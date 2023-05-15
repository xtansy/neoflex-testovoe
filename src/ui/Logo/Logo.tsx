import "./Logo.scss";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate("/");
    }

    return <h1 className="logo" onClick={onClickLogo}>QPICK</h1>
};


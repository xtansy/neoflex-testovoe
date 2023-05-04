import "./Home.scss";

import { useSelector } from "react-redux";

import { headphonesSelector } from "@headphones/selectors";
import { Headphones } from "./Headphones/Headphones";

export const Home = () => {
    const headphones = useSelector(headphonesSelector);

    if (!headphones) return <h1>нету</h1>;
    return (
        <div className="home">
            <h1 className="home__title">Наушники</h1>
            <Headphones items={headphones.wired} />
            <h1 className="home__title">Беспроводные наушники</h1>
            <Headphones items={headphones.wireless} />
        </div>
    );
};


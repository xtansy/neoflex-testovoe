import "./Headphones.scss";

import { useDispatch } from "react-redux";

import { addItem } from "@redux/cart";
import { Headphone } from "@components";

interface HeadphonesProps {
    items: Headphone[]
}

export const Headphones: React.FC<HeadphonesProps> = ({ items }) => {
    const dispatch = useDispatch();

    const onClickAdd = (item: Headphone) => {
        dispatch(addItem(item));
    }

    return (
        <div className="headphones">
            {
                items.map((item, i) => <Headphone {...item} key={i} onClickAdd={() => onClickAdd(item)} />)
            }
        </div>
    );
};


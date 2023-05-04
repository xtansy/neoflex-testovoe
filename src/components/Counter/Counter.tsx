import "./Counter.scss";

import { Minus, Plus } from "@ui";

interface CounterProps {
    onClickMinus: () => void;
    onClickPlus: () => void;
    count: number;
}

export const Counter: React.FC<CounterProps> = ({ count, onClickMinus, onClickPlus }) => {
    return (
        <div className="counter">
            <Minus onClick={onClickMinus} />
            <p>{count}</p>
            <Plus onClick={onClickPlus} />
        </div>
    );
};


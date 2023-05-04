import "./Minus.scss"

interface MinusProps {
    onClick: () => void;
}

export const Minus: React.FC<MinusProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="minus round">
            <div className="minus__line round__line"></div>
        </div>
    );
};


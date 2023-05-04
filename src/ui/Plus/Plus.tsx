import "./Plus.scss";

interface PlusProps {
    onClick: () => void;
}

export const Plus: React.FC<PlusProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="plus round">
            <div className="plus__line_one round__line"></div>
            <div className="plus__line_two round__line"></div>
        </div>
    );
};


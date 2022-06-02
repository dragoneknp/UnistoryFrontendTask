import { useNavigate } from "react-router-dom";
import { CardProps } from "../../Types/types";
import Button from "../Button/button";
import "./card.css";

const Card = ({ title, content, id }: CardProps) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/post/${id}`);
    return (
        <div className="card">
            <div className="card__title">
                <p>{title}</p>
            </div>
            <div className="card__content">
                <p>{content}</p>
            </div>
            <Button onClick={handleClick} text={"Перейти"}></Button>
        </div>
    );
};
export default Card;

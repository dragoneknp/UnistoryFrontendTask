import { CardProps } from "../../Types/types";
import Card from "../Card/card";
import "./gridOfCards.css";
interface GridOfCardsProps {
    cards: CardProps[];
}
const GridOfCards = ({ cards }: GridOfCardsProps) => {
    return (
        <section className="gridOfCards">
            {cards.map((card) => (
                <Card
                    title={card.title}
                    content={card.content}
                    id={card.id}
                    key={card.id}
                />
            ))}
        </section>
    );
};
export default GridOfCards;

import "./button.css";
interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}
const Button = ({ text, onClick, style }: ButtonProps) => {
    return (
        <button
            className={`button ${style ? "button_" + style : ""}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default Button;

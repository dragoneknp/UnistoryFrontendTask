import { useRef } from "react";
import Button from "../Button/button";
import "./confirmationModal.css";
interface ConfirmationModalProps {
    confirmClick: () => void;
    cancelClick: () => void;
}
const ConfirmationModal = ({
    confirmClick,
    cancelClick,
}: ConfirmationModalProps) => {
    const ref = useRef();
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!(ref.current as any)?.contains(event.target)) {
            cancelClick();
        }
    };
    return (
        <div className="confirmationModal" onClick={handleClick}>
            <div className="confirmationModal__container" ref={ref as any}>
                <div className="confirmationModal__header">Вы уверены?</div>
                <div className="confirmationModal-btnGroup">
                    <Button text={"Нет"} onClick={cancelClick}></Button>
                    <Button
                        text={"Да"}
                        onClick={confirmClick}
                        style={"red"}
                    ></Button>
                </div>
            </div>
        </div>
    );
};
export default ConfirmationModal;

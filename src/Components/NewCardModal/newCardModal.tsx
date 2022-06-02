import React, { forwardRef, useId, useRef, useState } from "react";
import { useAppDispatch } from "../../Hooks/useRedux";
import { addPost } from "../../Store/Slices/postsSlice";
import Button from "../Button/button";
import "./newCardModal.css";
interface NewCardModalProps {
    changeOpened: () => void;
}
const NewCardModal = ({ changeOpened }: NewCardModalProps) => {
    const dispatch = useAppDispatch();
    const ref = useRef();
    const [title, changeTitle] = useState<string>("");
    const [content, changeContent] = useState<string>("");
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!(ref.current as any)?.contains(event.target)) {
            changeOpened();
        }
    };
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        changeTitle(event.target.value);
    const handleContentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => changeContent(event.target.value);
    const handleCancelClick = () => changeOpened();
    const id = useId();
    const handleSaveClick = () => {
        dispatch(addPost({ title, content, id }));
        changeOpened();
    };
    return (
        <div className="newCardModal" onClick={handleClick}>
            <div className="newCardModal__container" ref={ref as any}>
                <input
                    type="text"
                    className="newCardModal__title"
                    placeholder="Input title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className="newCardModal__content"
                    placeholder="Input content"
                    value={content}
                    onChange={handleContentChange}
                />
                <div className="newCardModal-btnGroup">
                    <Button
                        text={"Отмена"}
                        onClick={handleCancelClick}
                    ></Button>
                    <Button
                        text={"Сохранить"}
                        onClick={handleSaveClick}
                    ></Button>
                </div>
            </div>
        </div>
    );
};
export default NewCardModal;

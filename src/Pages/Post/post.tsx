import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/button";
import ConfirmationModal from "../../Components/ConfirmationModal/confirmationModal";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { postsSelector } from "../../Store/selectors";
import { changePostData, deletePost } from "../../Store/Slices/postsSlice";
import { CardProps } from "../../Types/types";
import "./post.css";
const Post = () => {
    const { id } = useParams();
    const { posts } = useAppSelector(postsSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [currentPost, changeCurrentPost] = useState<CardProps | undefined>(
        posts.find((post) => post.id === id)
    );
    const [title, changeTitle] = useState<string>(currentPost?.title || "");
    const [content, changeContent] = useState<string>(
        currentPost?.content || ""
    );
    const [isConfirmationModalOpened, changeOpened] = useState<boolean>(false);
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
        changeTitle(event.target.value);
    const handleChangeContent = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => changeContent(event.target.value);
    const handleBackButtonClick = () => navigate("/");
    const handleSaveButtonClick = () => {
        dispatch(changePostData({ id: id as string, title, content }));
        navigate("/");
    };
    const handleDeleteButtonClick = () => {
        changeOpened(true);
    };
    const handleConfirmClick = () => {
        dispatch(deletePost(id as string));
        navigate("/");
    };
    const handelCancelClick = () => {
        changeOpened(false);
    };

    return (
        <PageLayout>
            <div className="post">
                <div className="post__backButton">
                    <Button
                        onClick={handleBackButtonClick}
                        text={"Назад"}
                    ></Button>
                </div>

                <h2 className="post__header">Запись {currentPost?.title}</h2>
                <input
                    type="text"
                    className="post__title"
                    value={title}
                    onChange={handleChangeTitle}
                />
                <textarea
                    className="post__content"
                    value={content}
                    onChange={handleChangeContent}
                ></textarea>
                <div className="post-btnGroup">
                    <Button
                        text={"Удалить"}
                        onClick={handleDeleteButtonClick}
                        style={"red"}
                    ></Button>
                    <Button
                        text={"Сохранить"}
                        onClick={handleSaveButtonClick}
                    ></Button>
                </div>
                {isConfirmationModalOpened && (
                    <ConfirmationModal
                        confirmClick={handleConfirmClick}
                        cancelClick={handelCancelClick}
                        
                    />
                )}
            </div>
        </PageLayout>
    );
};
export default Post;

import React, { useRef, useState } from "react";
import Button from "../../Components/Button/button";
import Card from "../../Components/Card/card";
import GridOfCards from "../../Components/GridOfCards/gridOfCards";
import NewCardModal from "../../Components/NewCardModal/newCardModal";
import { useAppDispatch, useAppSelector } from "../../Hooks/useRedux";
import PageLayout from "../../Layout/pageLayout";
import { postsSelector } from "../../Store/selectors";

import "./blog.css";
const Blog = () => {
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(postsSelector);
    const [isModalOpened, changeOpened] = useState<boolean>(false);

    const handleModalOpenClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        changeOpened(!isModalOpened);
    };
    return (
        <>
            <PageLayout>
                <div className="blog">
                    <h1 className="blog__header">Blog</h1>

                    <GridOfCards cards={posts} />

                    <button
                        className="blog__addNewButton"
                        onClick={handleModalOpenClick}
                    >
                        Добавить
                    </button>
                    {isModalOpened && (
                        <NewCardModal
                            changeOpened={() => changeOpened(!isModalOpened)}
                        />
                    )}
                </div>
            </PageLayout>
        </>
    );
};
export default Blog;

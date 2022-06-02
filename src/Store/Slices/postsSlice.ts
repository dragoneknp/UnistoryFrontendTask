import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../../Types/types";

interface InitialStateProps {
    posts: CardProps[];
    isLoading: boolean;
    error: string;
}

const initialState: InitialStateProps = {
    posts: [
        {
            title: "Title",
            content: "Test text",
            id: "1",
        },
        {
            title: "Title",
            content: "Mock mock",
            id: "2",
        },
        {
            title: "Title",
            content:
                "Mock mockasdasdasdasdasd Mock mockasdasdasdasdasd vMock mockasdasdasdasdasd Mock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasdMock mockasdasdasdasdasd",
            id: "3",
        },
        {
            title: "Title",
            content: "What's happened next",
            id: "4",
        },
        {
            title: "Title",
            content: "Nothing",
            id: "5",
        },
    ],
    isLoading: false,
    error: "",
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<CardProps>) {
            state.posts.push({
                title: action.payload.title || "No title",
                content: action.payload.content || "No content",
                id: action.payload.id,
            });
        },
        deletePost(state, action: PayloadAction<string>) {
            state.posts = state.posts.filter(
                (post) => post.id !== action.payload
            );
        },
        changePostData(state, action: PayloadAction<CardProps>) {
            const post = state.posts.find(
                (post) => post.id === action.payload.id
            );
            post!.content = action.payload.content;
            post!.title = action.payload.title;
        },
    },
});

export const { addPost, deletePost, changePostData } = postsSlice.actions;
export const postReducer = postsSlice.reducer;

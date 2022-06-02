import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/blog";
import Post from "./Pages/Post/post";
import { store } from "./Store/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Blog />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
export default App;

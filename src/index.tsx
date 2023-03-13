import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Allaverage from "./components/Allaverage";
import Myaverage from "./pages/student/Myaverage";
import Gradelist from "./pages/student/Gradelist";
import Mypage from "./pages/Mypage";
import Feedback from "./pages/Feedback";
import FeedbackDetail from "./pages/FeedbackDetail";
import FeedbackWrite from "./pages/teacher/FeedbackWrite";
import GradeRegist from "./pages/teacher/GradeRegist";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query/types/react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/student",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "myaverage", element: <Myaverage /> },
            { path: "gradelist", element: <Gradelist /> },
            { path: "feedback", element: <Feedback /> },
            { path: "feedback/:titleId", element: <FeedbackDetail /> },
            { path: "mypage", element: <Mypage /> },
        ],
    },
    {
        path: "/teacher",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "allaverage", element: <Allaverage /> },
            { path: "graderegist", element: <GradeRegist /> },
            { path: "feedback", element: <Feedback /> },
            { path: "feedback/write", element: <FeedbackWrite /> },
            { path: "feedback/:titleId", element: <FeedbackDetail /> },
            { path: "mypage", element: <Mypage /> },
        ],
    },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    </Provider>
);

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Myaverage from "./pages/student/Myaverage";
import Gradelist from "./pages/student/Gradelist";
import Mypage from "./pages/Mypage";
import Feedback from "./pages/Feedback";
import FeedbackDetail from "./pages/FeedbackDetail";
import FeedbackWrite from "./pages/teacher/FeedbackWrite";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import CreateUser from "./pages/master/CreateUser";
import ManagementUser from "./pages/master/ManagementUser";
import FindId from "./pages/FindId";
import FindPassword from "./pages/FindPassword";
import GradeList from "./pages/teacher/GradeList";
import AllAverage from "./pages/teacher/AllAverage";
import StudentAvg from "./pages/teacher/StudentAvg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/findid",
    element: <FindId />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/findpassword",
    element: <FindPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/master",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "create", element: <CreateUser /> },
      { path: "management", element: <ManagementUser /> },
    ],
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
      { path: "allaverage", element: <AllAverage /> },
      { path: "studentavg", element: <StudentAvg /> },
      { path: "gradelist", element: <GradeList /> },
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

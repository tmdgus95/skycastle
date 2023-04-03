import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slice/userSlice";
import feedbackReducer from "../store/slice/feedbackSlice";

export const store = configureStore({
    reducer: { auth: authReducer, feedback: feedbackReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FeedBackState {
    writer: string | null;
    regDt: string | null;
    title: string | null;
    content: string | null;
}

const initialState: FeedBackState = {
    writer: null,
    regDt: null,
    title: null,
    content: null,
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        setWriter(state, action: PayloadAction<string>) {
            state.writer = action.payload;
        },
        setRegDt(state, action: PayloadAction<string>) {
            state.regDt = action.payload;
        },
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setContent(state, action: PayloadAction<string>) {
            state.content = action.payload;
        },

        clearFeedbackInfo(state) {
            return initialState;
        },
    },
});

export const { setWriter, setRegDt, setTitle, setContent, clearFeedbackInfo } =
    feedbackSlice.actions;

export default feedbackSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    role: string | null;
    name: string | null;
}

const initialState: AuthState = {
    role: null,
    name: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setRole(state, action: PayloadAction<string>) {
            state.role = action.payload;
        },
        clearAuthInfo(state) {
            return initialState;
        },
    },
});

export const { setName, setRole, clearAuthInfo } = authSlice.actions;

export default authSlice.reducer;

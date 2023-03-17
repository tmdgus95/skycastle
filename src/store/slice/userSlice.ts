import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    role: string | null;
    name: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    role: null,
    name: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
        setRefreshToken(state, action: PayloadAction<string>) {
            state.refreshToken = action.payload;
        },
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

export const {
    setAccessToken,
    setRefreshToken,
    setName,
    setRole,
    clearAuthInfo,
} = authSlice.actions;

export default authSlice.reducer;

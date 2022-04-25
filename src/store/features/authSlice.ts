import { createSlice } from '@reduxjs/toolkit';
import { Authentication } from '../../models/appStateTypes';

const initialState: Authentication = {
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

// Reducer
export default authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginFormSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
    reducer: {
        loginForm: loginReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

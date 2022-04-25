import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormState } from '../../models/appStateTypes';

const initialState: LoginFormState = {
    username: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateVal: (state: any, action) => {
            Object.keys(action.payload).forEach(function (key) {
                state[key] = action.payload[key];
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateVal } = loginSlice.actions;

// Reducer
export default loginSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = userSlice.actions;

export const selectToken = (state) => state.user.token;

export default userSlice.reducer;

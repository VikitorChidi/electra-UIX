import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { loading: false, isAuthenticated: false, user: {} },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setUser, setAuthenticated, setLoading } = userSlice.actions;
export default userSlice.reducer;

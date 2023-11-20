import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const isLoggedSlice = createSlice({
	name: 'islogged',
	initialState,
	reducers: {
		logIn(state, action) {
			return true;
		},
		logOut(state, action) {
			return false;
		},
	},
});

export default isLoggedSlice.reducer;
export const { logIn, logOut } = isLoggedSlice.actions;

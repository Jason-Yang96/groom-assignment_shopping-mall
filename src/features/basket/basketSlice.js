import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	// Prb8: when newly dispatching the basketAdd action, the original one disappear. =>
	// Sol1: Check the redux tutorial docs. Is it same situation?
	// -> Yes. In the tree chart of the redux devtools, after create new thing(post here),
	// Sol2: Directly check the basket state of store. Check the way of look indide of the store data(useSelector)
	// Result: Before reloading, in the store there is an state array as I expected. But after reload the page, it initialized
	reducers: {
		basketAdd(state, action) {
			state.push(action.payload);
		},
	},
});

export const { basketAdd } = basketSlice.actions;
export default basketSlice.reducer;

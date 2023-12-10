import { TProd } from "@/app/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
	item: null | TProd;
	filter: "new" | "low" | "hight";
}

const initialState: IProduct = {
	item: null,
	filter: "new",
};

export const filterSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		add: (state) => {
			state.item = state.item;
		},
		filter: (state, action: PayloadAction<"new" | "low" | "hight">) => {
			state.filter = action.payload;
		},
	},
});

export const { add, filter } = filterSlice.actions;

export default filterSlice.reducer;

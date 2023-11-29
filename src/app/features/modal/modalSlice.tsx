import { createSlice } from "@reduxjs/toolkit";

export interface ModalSlice {
	call: boolean;
	order: boolean;
	comment: boolean;
	modal: boolean;
	picture: boolean;
}

const initialState: ModalSlice = {
	call: false,
	order: false,
	comment: false,
	modal: false,
	picture: false,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		call: (state) => {
			state.call = !state.call;
			state.modal = state.call;
		},
		order: (state) => {
			state.order = !state.order;
			state.modal = state.order;
		},
		picture: (state) => {
			state.picture = !state.picture;
			state.modal = state.picture;
		},
		comment: (state) => {
			state.comment = !state.comment;
			state.modal = state.comment;
		},
		modalClose: (state) => {
			state.modal = false;
			state.order = false;
			state.call = false;
			state.picture = false;
			state.comment = false;
		},
	},
});

export const { call, order, picture, modalClose, comment } = modalSlice.actions;

export default modalSlice.reducer;

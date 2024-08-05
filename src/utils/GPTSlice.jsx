import { createSlice } from "@reduxjs/toolkit";

const GPTSlice =createSlice ({
    name: 'GPT',
    initialState: {
        showGPTSearch: false,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGPTSearch =!state.showGPTSearch;
        }, 
    },
});

export const {toggleSearchView} =GPTSlice.actions;
export default GPTSlice.reducer
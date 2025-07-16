import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "sugggestions",
    initialState: {
        suggestedMovies: [],
        AllSuggestedMovies: [],
        showLoader: false,
    },
    reducers: {
        addMovies: (state, action) => {
            state.suggestedMovies = action.payload;
        },
        addAllMovies: (state,action) => {
            state.AllSuggestedMovies = action.payload;
        },
        toggleLoader: (state,action) => {
            state.showLoader = action.payload;
        }
    }
});

export const { addMovies,addAllMovies,toggleLoader } = gptSlice.actions;
export default gptSlice.reducer;
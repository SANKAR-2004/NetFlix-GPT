import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movieData",
    initialState: {
        topRatedMovies: [],
        upComingMovies: [],
        popularMovies: [],
        nowPlayingMovies:[]
    },
    reducers: {
        addAllMovies: (state, action) => {
            state.topRatedMovies = action.payload[0];
            state.nowPlayingMovies = action.payload[1];
            state.popularMovies = action.payload[2];
            state.upComingMovies = action.payload[3];
        }
    }
});

export const { addAllMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
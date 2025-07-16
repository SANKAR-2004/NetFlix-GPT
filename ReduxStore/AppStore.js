import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import gptSlice from "./gptSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
    gpt:gptSlice
  },
});

export default AppStore;




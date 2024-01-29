import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice/movieSlice"

const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export default store
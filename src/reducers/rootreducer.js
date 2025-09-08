
import themeSlice from "../slices/themeSlice"


import { combineReducers } from "@reduxjs/toolkit";
const rootReducer=combineReducers({
    theme:themeSlice
})

export default rootReducer
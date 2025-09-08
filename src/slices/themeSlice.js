import { createSlice } from "@reduxjs/toolkit";

const initialTheme = localStorage.getItem("theme") || "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    setThemeToggle: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // persist to localStorage
    },
  },
});

export const { setThemeToggle } = themeSlice.actions;
export default themeSlice.reducer;
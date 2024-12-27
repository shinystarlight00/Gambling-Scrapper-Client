import { createSlice } from "@reduxjs/toolkit";

export const webSlice = createSlice({
    name: "web",
    initialState: localStorage.getItem("web") || "RustyPot",
    reducers: {
        setWeb: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setWeb } = webSlice.actions;
export default webSlice.reducer;
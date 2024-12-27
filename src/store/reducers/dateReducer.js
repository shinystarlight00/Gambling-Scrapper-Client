import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const dateSlice = createSlice({
    name: "date",
    initialState: {
        start: moment("2023-10-25").toDate(),
        end: new Date(),
    },
    reducers: {
        setDate: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setDate } = dateSlice.actions;
export default dateSlice.reducer;
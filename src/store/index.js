import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer.js";
import webReducer from "./reducers/webReducer.js";
import dateReducer from "./reducers/dateReducer.js";

export default configureStore({
    reducer: {
        user: userReducer,
        web: webReducer,
        date: dateReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
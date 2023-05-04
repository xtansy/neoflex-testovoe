import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import headphones from "./headphones/headphones";
import cart from "./cart/cart";

export const store = configureStore({
    reducer: { headphones, cart },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

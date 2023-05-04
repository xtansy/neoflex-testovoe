import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartSlice {
    items: CartItem[];
}

const initialState: CartSlice = {
    items: []
}

const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<Headphone>) => {
            const existItem = state.items.find(item => item.id === payload.id);
            if (existItem) {
                existItem.count++;
                return;
            }
            state.items.push({ count: 1, ...payload });
        },
        minusItem: (state, { payload }: PayloadAction<Headphone["id"]>) => {
            const item = state.items.find(cartItem => cartItem.id === payload);
            if (item && item.count > 1) {
                item.count--;
            }
        },
        removeItem: (state, { payload }: PayloadAction<Headphone["id"]>) => {
            state.items = state.items.filter(item => item.id !== payload);
        },
    },
});

const { reducer, actions } = cart;
export const { addItem, minusItem, removeItem } = actions;
export default reducer;

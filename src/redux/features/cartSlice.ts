import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    day?: string; // Add optional day field
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Redux Slice - cartSlice.js
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id && item.day === action.payload.day);
            if (existingItem) {
                // Optionally handle duplicate items with the same day
                return;
            }
            state.items.push(action.payload);
        },
        // Redux Slice - cartSlice.js
        removeItem: (state, action) => {
            const { id, day } = action.payload; // Use both `id` and `day` to identify the item
            state.items = state.items.filter(item => item.id !== id || item.day !== day);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
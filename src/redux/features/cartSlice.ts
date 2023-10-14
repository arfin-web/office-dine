import { createSlice } from '@reduxjs/toolkit'

export interface cartState {
    items: string[]
}

const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            const itemIndex = state.items.indexOf(action.payload)
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1)
            }
        }
    }
})

export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const product_slice = createSlice(
    {
        name: "product",
        initialState: {
            cart: [],
            bill: 0
        },
        reducers: {
            get: (state, action) => {
                const existingitem = state.cart.filter((item) => item.id === action.payload.id)
                if (existingitem.length > 0) {
                    existingitem[0].qty += 1
                    existingitem[0].total = existingitem[0].qty * existingitem[0].price
                    state.bill += existingitem[0].price


                }
                else {

                    state.cart.push(action.payload)
                    action.payload.qty = parseInt(1)
                    action.payload.total = parseInt(action.payload.price)
                    state.bill += parseInt(action.payload.total)



                }
            },
            increment: (state, action) => {

                state.cart[action.payload].qty = state.cart[action.payload].qty + 1
                state.cart[action.payload].total = state.cart[action.payload].qty * state.cart[action.payload].price
                state.bill += state.cart[action.payload].price
            },
            removeitem: (state, action) => {
                state.cart.splice(action.payload, 1);
            },
            decrement: (state, action) => {
                if (state.cart[action.payload].qty > 0) {
                    state.cart[action.payload].qty = state.cart[action.payload].qty - 1

                }
                state.cart[action.payload].total = state.cart[action.payload].qty * state.cart[action.payload].price
                state.bill -= state.cart[action.payload].price


            }

        }
    }
)
export const { get, increment, decrement, removeitem } = product_slice.actions
export default product_slice.reducer
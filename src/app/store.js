import { configureStore } from "@reduxjs/toolkit";
import product from '../feature/product_slice'

export const store = configureStore(
    {
        reducer : {
         cart: product   
        }
    }
)
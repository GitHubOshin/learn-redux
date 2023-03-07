import { configureStore } from '@reduxjs/toolkit'
import productCartReducer from '../slices/productCartSlice'

export const store = configureStore({
  reducer: {
    cart: productCartReducer
  }
})

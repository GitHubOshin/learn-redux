import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const productCartSlice = createSlice({
  name: 'productCart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cartItems.push(action.payload)
    }
  }
})

export const { addProductToCart } = productCartSlice.actions

export default productCartSlice.reducer

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import productList from './data/products'
import { addProductToCart } from './slices/productCartSlice'

function App() {
  const productsInCart = useSelector((state) => {
    return state.cart.cartItems
  })

  const dispatch = useDispatch()

  return (
    <div className="p-20 bg-cyan-50 h-screen">
      <h1 className="font-bold text-[30px]">E-Commerce App</h1>
      <br />
      <div className="flex gap-8">
        {productList.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-orange-100 w-[300px] h-[110px] rounded-lg p-3 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <button
                className="bg-red-900 text-white p-2 rounded-md"
                onClick={() => dispatch(addProductToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>
      <br />
      <hr className="bg-slate-400 h-[1.9px]" />
      <br />
      <h1 className="font-bold text-[30px]">Cart</h1>
      <br />
      <div className="flex gap-8">
        {productsInCart.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-orange-100 w-fit h-fit rounded-lg p-3 text-center"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

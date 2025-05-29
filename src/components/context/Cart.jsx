// @ts-nocheck
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
   const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || [])

   const addToCart = (product, size=null) => {
      let updatedCart = [...cartData];

      //If cart is empty
      if(cartData.length == 0){
         updatedCart.push({
            id: `${product.id}-${Math.floor(Math.random() * 10000000)}`,
            product_id: product.id,
            size: size,
            title: product.title,
            price: product.price,
            qty: 1,
            image_url : product.image_url
         })
      }else{
         // If size not empty
         if(size != null){
            const isProductExist = updatedCart.find(item => 
               item.product_id == product.id && item.size == size
            )
            // If product and size combination exists then  increase qty
            if(isProductExist){
               updatedCart = updatedCart.map(item => 
                  (item.product_id == product.id && item.size == size)
                  ? {...item, qty: item.qty + 1}
                  : item
               )
            }else{
               // product and size combination not exists then add new item
               updatedCart.push({
               id: `${product.id}-${Math.floor(Math.random() * 10000000)}`,
               product_id: product.id,
               size: size,
               title: product.title,
               price: product.price,
               qty: 1,
               image_url : product.image_url
               }) 
            }
         } else{
            // When size is null
            const isProductExist = updatedCart.find(item => 
               item.product_id == product.id 
            )
            if(isProductExist){
               //when product found in cart then increase qty
               updatedCart = updatedCart.map(item => 
                  (item.product_id == product.id)
                  ? {...item, qty: item.qty + 1}
                  : item
               )
            }else{
               // product not exists then add new item
               updatedCart.push({
               id: `${product.id}-${Math.floor(Math.random() * 10000000)}`,
               product_id: product.id,
               size: size,
               title: product.title,
               price: product.price,
               qty: 1,
               image_url : product.image_url
               }) 
            }
         }
      }

      setCartData(updatedCart)
      localStorage.setItem('cart',JSON.stringify(updatedCart))
   }

   const shipping = () => {
      return 0;
   }

   const subTotal = () => {
      let subtotal = 0;
      cartData.map(item => {
         subtotal += item.qty * item.price;
      })
      return subtotal;
   }

   const grandTotal = () => {
      return subTotal() + shipping();
   }

   return (
      <CartContext.Provider value={{ addToCart, cartData, grandTotal, subTotal, shipping }}>
         {children}
      </CartContext.Provider>
   )
}
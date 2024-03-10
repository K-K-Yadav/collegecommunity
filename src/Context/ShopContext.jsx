import React, { createContext, useState } from "react";
import all_product from '../components/Assets/all_product'; 


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let Cart ={};
    for (let index=0; index<all_product.length; index++){
        Cart[index]=0;
    }
    return Cart;
}


const ShopContextProvider = (props) => {
    const [CartItems,setCartItems] = useState(getDefaultCart());
 
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
            if (CartItems[item]>0) 
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * CartItems[item];  
            }
        }
        return totalAmount;

    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in CartItems) {
            if (CartItems[item]>0) 
            {
                totalItems += CartItems[item];  
            }
        }
        return totalItems;
    }
            
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,CartItems,addToCart,removeFromCart}; 

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;


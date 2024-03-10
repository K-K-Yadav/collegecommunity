import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = () => {
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='Cartitems'>
        <div className="Cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>

        </div>
        <hr/>
    {all_product.map((e)=>{
        if (CartItems[e.id]>0) {
            return <div>
            <div className="Cartitems-format">
                <img src={e.image} alt='' className='Carticon-product-icon'/>
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='Cartitems-quantity'>{CartItems[e.id]}</button>
                <p>₹{e.new_price*CartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' className='Carticon-remove-icon'/>
            </div>
            <hr/>
        </div>
        }
        return null;

    })}
    <div className="Cartitems-down">
        <div className="Cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="Cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="Cartitems-total-item">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="Cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>Proceed to checkout</button>
    </div>
    </div>
    </div>
  )
} 

export default CartItem
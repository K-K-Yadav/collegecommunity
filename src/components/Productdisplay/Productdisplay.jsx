import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='Productdisplay'>

            <div className="Productdisplay-left">
                <div className="Productdisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="Productdisplay-img">
                    <img className='Productdisplay-main-img' src={product.image} alt='' />
                </div>
                <div className="Productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="Productdisplay-right-start">
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_dull_icon} alt='' />
                        <p>(121)</p>
                    </div>
                    <div className="Productdisplay-right-prices">
                    <div className="Productdisplay-right-price-old">
                            ₹{product.old_price}
                        </div>
                        <div className="Productdisplay-right-price-new">
                            ₹{product.new_price}
                        </div>
                        <div className="Productdisplay-right-discription">
                        </div>

                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            </div>
        </div>
            )
}

            export default Productdisplay
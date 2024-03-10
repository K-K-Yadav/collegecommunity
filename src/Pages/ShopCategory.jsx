import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='Shop-category'>
      <img src={props.banner} alt=''/>
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="Shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
        <div className="Shopcategory-products">
          {all_product.map((item,i)=>{
              if (props.category===item.category) {
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
          })}
        </div>
    </div>
  );
}

export default ShopCategory

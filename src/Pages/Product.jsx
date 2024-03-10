// Product.jsx
import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Relatedproducts from '../components/RelatedProducts/Relatedproducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Relatedproducts /> 
    </div>
  );
}

export default Product;

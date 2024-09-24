import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Bredcrum } from '../Components/Bredcrum/Bredcrum';
import { ShopContext } from '../Context/ShopContext';
import { Productdisplay } from '../Components/ProductDisplay/Productdisplay';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productid}=useParams();
  
  const product=all_product.find((e)=>e.id===Number(productid))
  return (
    <div>
     
    </div>
  )
}


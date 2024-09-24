import React, { useContext } from 'react'
import './Css/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'






export const Shopcategory = (props) => {
const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

        <div className="shopcategory-indexsort">

          <p>
            <span>Showing 1-12</span> Out of 36 Products
          </p>


          <div className="shopcategory-sort">
            Sort by <img  src={dropdown} alt="" />
          </div>
            
        </div>
        
       <div className="shopcategory-products">
        {all_product.map((item,i)=>{
        if (props.category === item.category) {
          return <Item  key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
        } else {
              return (null)
        }
        }
        )}
       </div>
        <div className="shopcategory-loadmore">
         Explore More
        </div>

    </div>
  )
}

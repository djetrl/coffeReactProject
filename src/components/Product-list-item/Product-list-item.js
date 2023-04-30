import ProductItem from '../Product-Item/product-Item';
import './Product-list-item.css';


const ProductListItem = ({dataProduct})=>{


  const items = dataProduct.map(item=>{
    return[
      <ProductItem key={item.id} {...item} />
    ]
  })
  return(
    <div className="ProductListItem">
     {items}
    </div>
  )
}

export default ProductListItem;
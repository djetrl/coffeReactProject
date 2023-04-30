import './product-Item.css'
import img1 from '../../dist/img/OurBest/img-1.png';
import './product-Item.css';
import { PageContext } from '../context/context';
import { useContext } from 'react';


const ProductItem = (props) => {
  const {setPage,page} = useContext(PageContext);
  const {id,title,country,price }= props;
  const onSelectItem = ()=>{
    setPage(page+id, id)
    console.log(id);
  }
return(
      <div className="ProductItem" key={id} onClick={onSelectItem}>
      <img src={img1} alt="1" />
      <div className="ProductItem-content">
        <h4>{title}</h4>
        <p className='placeOfProduction'>{country}</p>
        <p  className='price'> {price}$</p>
      </div>
    </div>
);
}


export default ProductItem;
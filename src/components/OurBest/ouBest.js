import { PageContext } from '../context/context';
import { useContext } from 'react';

import './ourBest.css';
import img1 from '../../dist/img/OurBest/img-1.png';


const OurBest = ({dataProduct})=>{
  const {setPage,page} = useContext(PageContext);
  const items = dataProduct.map(({title, price,id})=>{
    
    const onSelectItem = ()=>{
      setPage(page+id, id)
    }

    return(
    <div className="containerBest-item"
         key={id} 
         onClick={ onSelectItem}>
      <img src={img1} alt="1" />
      <h4>{title}</h4>
      <p> {price}$</p>
    </div>
    )

  })



  return(
    <section className='OurBest'>
    <h2>Our best</h2>
    <div className="containerBest"> 

      {items}

    </div>
  </section>
  )

}


export default OurBest;
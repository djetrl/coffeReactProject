import Header from '../header/Header';
import Footer from '../footer/footer';
import DemarcationLine from '../demarcationLine/demarcationLine';

import img from '../../dist/img/product/Product.jpg';

import './productPage.css';


const ProductPage = ({ dataProduct, idProductPage})=>{
 const {country, price, description } = dataProduct[0]; 

  return(
  <div className="ProductPage" key={idProductPage}>
      <Header page ='Our coffee'/>
      <section className="ProductContent">
        <div className="ProductContent-img"><img src={img}   className="PageContent-img" alt="" /></div>
        <div className="ProductContent-text">
        <div className="ProductContent-title">About It</div>
        <DemarcationLine colors ='black'  icon= {true} />
        <p className='Country'> {country}</p>
        <p className='Description'>
        {description}
        </p>
        <p className='Price'> {price}$</p>
      </div>
      </section>
      <Footer/>
  </div>
  )

}

export default ProductPage;
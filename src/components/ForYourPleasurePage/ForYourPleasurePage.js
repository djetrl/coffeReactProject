import Header from "../header/Header";
import PageDescription from "../pageDescription/pageDescription";
import Footer from "../footer/footer";
import ShopWindow from "../shopWindow/shopWindow";
import './ForYourPleasurePage.css';

const ForYourPleasurePage = ({dataProduct, page})=>{


  return(
    <div className="ForYourPleasurePage">
      <Header page ={page}/>
      <PageDescription  page ={page}/>
      <ShopWindow  dataProduct={dataProduct} page ={page} />
      <Footer/>
    </div>
  )

}


export default ForYourPleasurePage;
import Header from "../header/Header";
import Footer from "../footer/footer";
import PageDescription from "../pageDescription/pageDescription";
import ShopWindow from "../shopWindow/shopWindow";


import './coffePage.css';



const CoffeePage = ({page, dataProduct,onUpdateSearch})=>{

return(
  <div className="CoffeePage">
    <Header page ={page}/>
    <PageDescription/>
    <ShopWindow  dataProduct={dataProduct} onUpdateSearch={onUpdateSearch}/>
    <Footer/>
  </div>
)



}


export default CoffeePage;
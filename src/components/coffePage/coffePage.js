import Header from "../header/Header";
import Footer from "../footer/footer";
import PageDescription from "../pageDescription/pageDescription";
import ShopWindow from "../shopWindow/shopWindow";


import './coffePage.css';



const CoffeePage = ({page, dataProduct})=>{

return(
  <div className="CoffeePage">
    <Header page ={page}/>
    <PageDescription/>
    <ShopWindow  dataProduct={dataProduct}/>
    <Footer/>
  </div>
)



}


export default CoffeePage;
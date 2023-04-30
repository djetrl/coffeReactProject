import Header from "../header/Header";
import Footer from "../footer/footer";
import PageDescription from "../pageDescription/pageDescription";
import ShopWindow from "../shopWindow/shopWindow";


import './coffePage.css';



const CoffeePage = ({page, dataProduct,onUpdateSearch,  onFilterSelect, filter})=>{

return(
  <div className="CoffeePage">
    <Header page ={page}/>
    <PageDescription/>
    <ShopWindow  dataProduct={dataProduct} onUpdateSearch={onUpdateSearch}  onFilterSelect={onFilterSelect} filter={filter}/>
    <Footer/>
  </div>
)



}


export default CoffeePage;
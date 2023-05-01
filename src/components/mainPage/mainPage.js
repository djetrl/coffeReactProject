import Header from "../header/Header";
import PageDescription from "../pageDescription/pageDescription";
import './mainPage.css';
import Footer from "../footer/footer";
import OurBest from "../OurBest/ouBest";
const MainPage = ({page,dataProduct}) =>{
  return(
    
    <div className="MainPage">
      <Header page={page} />
      <PageDescription page={page} />
      <OurBest dataProduct={dataProduct}/>
      <Footer/>
    </div>
  );


}

export default MainPage;
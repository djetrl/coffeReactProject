import Header from "../header/Header";
import PageDescription from "../pageDescription/pageDescription";
import './mainPage.css';
import Footer from "../footer/footer";
import OurBest from "../OurBest/ouBest";
const MainPage = ({page}) =>{
  return(
    
    <div className="MainPage">
      <Header page={page} />
      <PageDescription/>
      <OurBest/>
      <Footer/>
    </div>
  );


}

export default MainPage;
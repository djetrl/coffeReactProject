import DemarcationLine from "../demarcationLine/demarcationLine";
import Navigation from "../nav/navigation";

import './footer.css';

const Footer = ()=>{
  return(
    <footer>
      <Navigation/>
      <DemarcationLine   icon= {true}/>
   
    </footer>
  )
}

export default Footer;
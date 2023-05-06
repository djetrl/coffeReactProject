
import img from './preloaded.gif';

import './preloaded.css';

const Preloaded  = () =>{

  return(
    <div className="Preloaded-wrapper">
       <img src={img} alt="Preloaded" />
       <p>Loading</p>
    </div>
  )


}



export default Preloaded;
import './ourBest.css';
import img1 from '../../dist/img/OurBest/img-1.png';
import img2 from '../../dist/img/OurBest/img-2.png';
import img3 from '../../dist/img/OurBest/img-3.png';
const OurBest = ()=>{


  return(
    <section className='OurBest'>
    <h2>Our best</h2>
    <div className="containerBest"> 

      <div className="containerBest-item">
        <img src={img1} alt="1" />
        <h4>Solimo Coffee Beans 2 kg</h4>
        <p> 10.73$</p>
      </div>

      <div className="containerBest-item">
        <img src={img2} alt="" />
        <h4>Solimo Coffee Beans 2 kg</h4>
        <p> 10.73$</p>
      </div>

      <div className="containerBest-item">
        <img src={img3} alt="" />
        <h4>Solimo Coffee Beans 2 kg</h4>
        <p> 10.73$</p>
      </div>

    </div>
  </section>
  )

}


export default OurBest;
import './pageDescription.css';
import DemarcationLine from '../demarcationLine/demarcationLine';
import img from '../../dist/img/pageDescription/img.png';

const PageDescription = ()=>{
  return (
   <section className='PageDescription'>
    <div className="PageContent-img"><img src={img}   className="PageContent-img" alt="" /></div>
    <div className="pageContent-text">
    <div className="PageDescription-title">About Us</div>
      <DemarcationLine colors ='black'  icon= {true} />
      <p>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
      </p>
      <p>
        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.
      </p>
    </div>
   </section>
  )
}


export default PageDescription;
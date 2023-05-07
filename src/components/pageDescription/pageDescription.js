import './pageDescription.css';
import DemarcationLine from '../demarcationLine/demarcationLine';
import img from '../../dist/img/pageDescription/img.png';
import img2 from '../../dist/img/pageDescription/ForYourPleasure.png';
const PageDescription = ({page})=>{


  const  PageDescriptionContent = page === 'Coffee house' ?  (
    <section className='PageDescription PageDescription--CoffeHouse '>
    <div className="pageContent-text">
      <h2 className="PageDescription-title">About Us</h2>
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
  ): page === 'Our coffee' ?  (
    <section className='PageDescription  PageDescription--OurCoffee'>
    <div className="PageContent-img "></div>
    <div className="pageContent-text">
    <h2 className="PageDescription-title">About our beans</h2>
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
  ):(
    <section className='PageDescription PageDescription--ForYourPleasure '>
    <div className="PageContent-img "></div>
    <div className="pageContent-text">
    <h2 className="PageDescription-title">About our goods</h2>
      <DemarcationLine colors ='black'  icon= {true} />
      <p>
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
      </p>
      <p>
      Afraid at highly months do things on at. Situation recommend objection do intention
      so questions. 
      As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face.
      </p>
    </div>
   </section>
  );

  return (
    <>
    {PageDescriptionContent}
   </>
  )
}


export default PageDescription;
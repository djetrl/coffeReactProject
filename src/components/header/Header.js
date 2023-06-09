import Navigation from '../nav/navigation';
import './header.css';
import DemarcationLine from '../demarcationLine/demarcationLine';
const Header = (props)=>{
  const {page} = props;
  const Contnent = page === 'Coffee house' ?  (
    <header className='header'>
          <Navigation/>
          <div className="header_Content">
            <h1>Everything You Love About Coffee</h1>
            <DemarcationLine colors="white" icon= {true} />
            <h2>We makes every day full of energy and taste </h2>
            <h2>Want to try our beans?</h2>
          </div>
    </header>
  ): page === 'Our coffee' ?  (
     <header className='header header-OurCoffe header-moddif-slim'>
    <Navigation />
    <div className="header_Content">
      <h1>Our Coffee</h1>
    </div>
    </header> 
  ):page === 'For your pleasure'?(
    <header className='header header-ForYourPage header-moddif-slim'>
    <Navigation />
    <div className="header_Content">
      <h1>For your pleasure</h1>
    </div>
    </header> 
  ):(    <header className='header header-ForYourPage header-moddif-slim'>
  <Navigation />
  <div className="header_Content">
    <h1>NOT FOUND PAGE</h1>
  </div>
  </header> );

  return(
    <>
     {Contnent}
    </>

  )
}

export default Header;
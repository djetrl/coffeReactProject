import './navigation.css';
import { PageContext } from '../context/context';
import { useContext } from 'react';
const  Navigation =()=>{
  const {setPage} = useContext(PageContext);

  const sectionItemData = [
      {name:'Coffee house'},
      {name:'Our coffee'},
      {name:'For your pleasure'}
  ];
const onsSetPageNav = (e)=>{

  setPage(e.target.innerText);
}
const sectionItem = sectionItemData.map( ({name, i}) =>{

 return(
    <a className={`nav__item`} key={name} onClick={onsSetPageNav}  >
    {name}
    </a>
 )
})

return(
  <div className="nav-group">
    {sectionItem}
  </div>
)

}

export default Navigation;
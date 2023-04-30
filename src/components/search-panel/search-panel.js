import { PageContext } from '../context/context';
import { useContext , useState } from 'react';



import './search-panel.css';

const SearchPanel = ()=>{
  const [term , setTerm ] = useState('');
  const {onUpdateSearch} = useContext(PageContext);

 const onUpdateSearchPanel = (e)=>{

    const terms = e.target.value;
    console.log(terms);
    setTerm(terms);
    onUpdateSearch(term.toLowerCase().split(/\s+/).join(''));
  };


  return(
    <div className="SearchPanel">
      <label htmlFor="search-input">Lookiing for</label>
    <input type="text"
            name='search-input' 
           className='search-input'
           placeholder='start typing here...'  value={term} onChange={onUpdateSearchPanel} />
    </div>           
  );
}


export default SearchPanel;
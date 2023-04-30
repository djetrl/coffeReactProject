
import { Component} from 'react';



import './search-panel.css';

class SearchPanel extends Component{
  constructor(props){
    super(props)
    this.state={
      term:''
    }
  }
  onUpdateSearch = (e)=>{

    const term = e.target.value;
    this.setState({term})
   this.props.onUpdateSearch(term.toLowerCase().split(/\s+/).join(''));
  };
render(){
  return(
    <div className="SearchPanel">
      <label htmlFor="search-input">Lookiing for</label>
    <input type="text"
            name='search-input' 
           className='search-input'
           placeholder='start typing here...'  value={this.state.term} onChange={this.onUpdateSearch} />
    </div>           
  );
}


}


export default SearchPanel;
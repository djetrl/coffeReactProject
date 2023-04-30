import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{


  render(){
    return(
      <div className="btn-group">
            <button className={`btn-filter`}
              type='button'>
              Brazil
            </button>
            <button className={`btn-filter`}
              type='button'>
              Kenya
            </button>
            <button className={`btn-filter`}
              type='button'>
              Columbia
            </button>
    </div>
    )
  }

}


export default AppFilter;
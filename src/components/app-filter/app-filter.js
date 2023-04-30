import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component{
  constructor(props){
    super(props);
    this.state={
      buttonsData :[
        {name:'Brazil',active:false},
        {name:'Kenya',active:false },
        {name:'Columbia',active:false}
      ]
    }
  }
 activeClazz = (e)=>{

  let  numberElement = this.state.buttonsData.findIndex(item=> item.name === e);
  const newData = this.state.buttonsData;
  newData[numberElement].active = true;

  this.setState ({buttonsData: newData})
 }
deleteActiveClazz = ()=>{
  const newData = this.state.buttonsData;
   newData.forEach(item=>{
    item.active = false;
   })
  this.setState ({buttonsData: newData})
}
render(){
  const {filter}=this.props; 
 const onFilterSelect = (e) => {
    if(filter !== 'all' && filter === e.target.innerText){
      this.props.onFilterSelect('all');
      this.deleteActiveClazz();
    }else{
      this.deleteActiveClazz();
     this.activeClazz(e.target.innerText);
     this.props.onFilterSelect(e.target.innerText);
    }
  }


 const buttons = this.state.buttonsData.map(({name,active}) =>{
   const clazz = active  ? `btn-filter active`: 'btn-filter';
    return(
      <button className={clazz}
      type='button'
      key={name}
      onClick={onFilterSelect}>
      {name}
    </button>

    );
  })
  return(
    <div className="btn-group">
      {buttons}
    </div>
  )
}

}





export default AppFilter;

import { Component } from 'react';
import MainPage from '../mainPage/mainPage';
import CoffeePage from '../coffePage/coffePage';
import ProductPage from '../productPage/productPage';
import ForYourPleasurePage from '../ForYourPleasurePage/ForYourPleasurePage';
import { PageContext } from '../context/context';
import Preloaded from '../preloaded/preloaded';


import './App.css';


class App extends Component {

  constructor(props){
    super(props);


    this.state={
      page:'Coffee house',
      idProductPage : 'none',
      term:'',
      preloaded:true,
      filter:'all',
      setPage: (e, id = 'none')=>{

            this.setState({
              page: e,
              idProductPage: id
            })
          
        } ,
        dataProduct :  [
          {id:'1',title: 'AROMISTICO Coffee 1 kg', country:'Brazil', price:'6.99',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."},
          {id:'2',title: 'AROMISTICO Coffee 3 kg', country:'Kenya', price:'10',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
          {id:'3',title: 'AROMISTICO Coffee 1 kg', country:'Brazil', price:'6.99',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
          {id:'4',title: 'AROMISTICO Coffee 1 kg', country:'Columbia', price:'10',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. "},
          {id:'5',title: 'AROMISTICO Coffee 5 kg', country:'Kenya', price:'8.54',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
          {id:'6',title: 'AROMISTICO Coffee 2 kg', country:'Columbia', price:'42.53',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."},
          {id:'7',title: 'AROMISTICO Coffee 1 kg', country:'Kenya', price:'6.99',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
          {id:'8',title: 'AROMISTICO Coffee 3 kg', country:'Brazil', price:'6.43',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."},
          {id:'9',title: 'AROMISTICO Coffee 8 kg', country:'Columbia', price:'5.23',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне.Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
          {id:'10',title: 'AROMISTICO Coffee 9 kg', country:'Brazil', price:'6.99',description:"Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне."},
        ]
    }
  };



  onSwitchingPage = (page)=>{
    console.log(page);;
  }

   SelectDataOfProductPage = (data,id) =>{
    return data.filter(item=> item.id ===  id)
  }

  onUpdateSearch = (term)=>{
    this.setState({term});
  }


  searchEmp = (items, term) =>{
    if(term.lenght === 0){
      return items;
    }
    return items.filter(item=>{
      const toLowerCaseSearch = item.title.toLowerCase().split(/\s+/).join('');
      return toLowerCaseSearch.indexOf(term) > -1;
    })
    
  }

  filterPost = (items, filter) =>{
    if(this.state.filter === 'all'){
      return items;
    }
    return items.filter(item=>{
    const toLowerCaseFilter = item.country;
    return toLowerCaseFilter.indexOf(filter) >-1;
    });
  }

  onFilterSelect = (filter) =>{
    this.setState({filter});
  }

  randomProduct(dataItem, quantity){
    let NewMass= [];
    let Maxcount =2;
    while (NewMass.length < quantity) {
      dataItem.forEach(item=>{
        let RandomCount =Math.floor(Math.random() * Maxcount);
        if(RandomCount === 1){
          if((!NewMass.includes(item) ) && NewMass.length < quantity){
            NewMass.push(item)
          }
        }
  
      })
    }

        

    return NewMass;
  }


render(){

  const {page,idProductPage,dataProduct,term, setPage,onUpdateSearch, filter, preloaded} = this.state;
   
  const visibleData =this.filterPost(this.searchEmp(dataProduct, term),  filter );
  const ourBest = this.randomProduct(dataProduct, 3);
  const ForYourPleasurePageData = this.randomProduct(dataProduct, 6);
  const installedPage = page === 'Coffee house' ? (<MainPage onChange={this.onSwitchingPage} page={page} dataProduct={ourBest}/> )
  : page === "Our coffee"? (<CoffeePage page={page} dataProduct={visibleData}  filter={filter} onUpdateSearch={this.onUpdateSearch}  onFilterSelect={this.onFilterSelect}/>)
  :page === "For your pleasure" ? (<ForYourPleasurePage page={page} dataProduct={ForYourPleasurePageData} />) 
  : (<ProductPage page={page} idProductPage={idProductPage}  dataProduct={this.SelectDataOfProductPage(dataProduct, idProductPage)} />);

  window.onload = ()=>{
    setTimeout(()=>{
      this.setState({preloaded:false})
    }, 3000)    
  }

    return (
      <div className="App">
        {
        preloaded ? <Preloaded/> :
        <PageContext.Provider value={{page, idProductPage, setPage, onUpdateSearch}}>
            {installedPage}
        </PageContext.Provider> 
        }

      </div>
    );
  }

}

export default App;

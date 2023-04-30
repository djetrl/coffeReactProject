

import './shopWindow.css';
import DemarcationLine from '../demarcationLine/demarcationLine';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from '../app-filter/app-filter';
import ProductListItem from '../Product-list-item/Product-list-item';


const ShopWindow =({dataProduct})=>{


  return(
    <section className='shopWindow'>
      <DemarcationLine/>
      <div className="SearchForm">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <ProductListItem dataProduct={dataProduct} />
    </section>
  );
}


export default ShopWindow;
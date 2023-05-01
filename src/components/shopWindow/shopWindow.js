

import './shopWindow.css';
import DemarcationLine from '../demarcationLine/demarcationLine';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from '../app-filter/app-filter';
import ProductListItem from '../Product-list-item/Product-list-item';


const ShopWindow =({dataProduct,onUpdateSearch, onFilterSelect,filter, page})=>{

  const shopWindowData = page ==='For your pleasure' ? (
    <section className='shopWindow shopWindow--ForYourPleasure'>
    <DemarcationLine/>
    <ProductListItem dataProduct={dataProduct}  />
  </section>
  ):(
      <section className='shopWindow'>
        <DemarcationLine/>
        <div className="SearchForm">
          <SearchPanel onUpdateSearch={onUpdateSearch}/>
          <AppFilter  onFilterSelect={onFilterSelect} filter={filter}/>
        </div>
        <ProductListItem dataProduct={dataProduct}  />
      </section>
  );

  return(
    <>
      {shopWindowData}
    </>
  );
}


export default ShopWindow;
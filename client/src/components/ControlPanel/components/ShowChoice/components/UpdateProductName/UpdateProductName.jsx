import { useEffect, useState } from "react";
import { SearchEngine } from "./components/search-engine/search-engine";
import { urlConnectionBackend } from "../../../../../../index";
import updateProduct from "./services/updateProduct";
import './UpdateProductName.css';


export let exportSetProductNameState;
export let exportSetProductIdState;
export let exportSetProductPhotoState;

const UpdateProductName = () => {
  const [productNameState, setProductNameState] = useState('');
  const [productIdState, setProductIdState] = useState(0);
  const [productPhotoState, setProductPhotoState] = useState('');
  const [ activeState, setActiveState ] = useState( true );
    
  exportSetProductNameState = setProductNameState;
  exportSetProductIdState = setProductIdState;
  exportSetProductPhotoState = setProductPhotoState;


  useEffect(() => {

    if( productNameState && productPhotoState )setActiveState( false );

  }, [ productNameState, productPhotoState ]);

  
  const handleProductName = ({ target })=>{

    const productName = target.value;
    setProductNameState( productName );

  }

  return (
    
    <div className="container-Update-the-entire-product">

      <SearchEngine urlConnectionBackend={ urlConnectionBackend }/>

      <form className="form-update-product" onSubmit={ ( event ) => updateProduct(event, productIdState, productPhotoState) }>
        <label htmlFor="update_product_name">Nuevo nombre del producto</label>
        <input type="tex" id="update_product_name" value={ productNameState } onChange={ handleProductName } placeholder="Nombre del producto" ></input>

        { productIdState.length > 0 && <img className="product-photo-control-panel" src={ productPhotoState } />}

        <div className="container-button-save">
          <button disabled={activeState} 
                  style={ !activeState ? {'cursor':'pointer'}:{'cursor':'none','opacity':'0.5'}} 
                  type="submit" 
                  className='submit-form-button save' >
                    Actualizar
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default UpdateProductName

import { useEffect, useState } from "react";
import { SearchEngine } from "./components/search-engine/search-engine";
import { urlConnectionBackend } from "../../../../../../index";
import deleteAProductDatabase from "./services/deleteAProductDatabase";
import './DeleteAProduct.css';


export let exportSetProductNameState;
export let exportSetProductIdState;
export let exportSetProductPhotoState;

const DeleteAProduct = () => {
  const [ productNameState, setProductNameState ] = useState('');
  const [ productIdState, setProductIdState ] = useState(0);
  const [ productPhotoState, setProductPhotoState ] = useState('');
  const [ activeState, setActiveState ] = useState( true );
    
  exportSetProductNameState = setProductNameState;
  exportSetProductIdState = setProductIdState;
  exportSetProductPhotoState = setProductPhotoState;


  useEffect(() => {

    if( productNameState && productPhotoState ) setActiveState( false );
    
  }, [ productNameState, productPhotoState ]);


  return (
    
    <div className="container-Update-the-entire-product">

      <SearchEngine urlConnectionBackend={ urlConnectionBackend }/>

      <form className="form-update-product" onSubmit={ ( event ) => deleteAProductDatabase( event, productIdState, productNameState, productPhotoState) }>
        { productNameState  && <div className='product-name-control-panel'>{ productNameState }</div> }
        { productPhotoState  && <img width='35' height='35' src={ productPhotoState } /> }
        <div className="container-button-save">
          <button disabled={activeState} 
                  style={ !activeState ? {'cursor':'pointer'}:{'cursor':'none','opacity':'0.5'}} 
                  className='submit-form-button delete' 
                  type="submit">
                    Eliminar
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default DeleteAProduct

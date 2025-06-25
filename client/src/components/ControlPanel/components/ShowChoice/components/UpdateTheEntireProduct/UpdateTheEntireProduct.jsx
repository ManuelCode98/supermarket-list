import { useEffect, useState } from "react";
import UploadPhoto, { exportUploadPhotoState } from "./components/UploadPhoto"
import { SearchEngine } from "./components/search-engine/search-engine";
import { urlConnectionBackend } from "../../../../../../index";
import updateProduct from "./services/updateProduct";
import './UpdateTheEntireProduct.css';


export let exportSetProductNameState;
export let exportSetProductIdState;
export let exportSetUploadPhotoState;

const UpdateTheEntireProduct = () => {
  const [ productNameState, setProductNameState ] = useState('');
  const [ productIdState, setProductIdState ] = useState(0);
  const [ activeState, setActiveState ] = useState( true );
  const [ uploadPhotoState, setUploadPhotoState ] = useState('');
   
  
  exportSetProductNameState = setProductNameState;
  exportSetProductIdState = setProductIdState;
  exportSetUploadPhotoState = setUploadPhotoState;

  useEffect(() => {

    if( productNameState && uploadPhotoState && productIdState ) setActiveState( false );

  }, [ productNameState, uploadPhotoState, productIdState ]);

  

  const handleProductName = ({ target })=>{

    const productName = target.value;
    setProductNameState( productName );

  }

  return (
    
    <div className="container-Update-the-entire-product">

      <SearchEngine urlConnectionBackend={ urlConnectionBackend }/>

      <form className="form-update-product" onSubmit={ ( event ) => updateProduct(event, productIdState) }>
        <label htmlFor="update_product_name">Nuevo nombre del producto</label>
        <input type="tex" id="update_product_name" value={ productNameState } onChange={ handleProductName } placeholder="Nombre del producto" ></input>
        <UploadPhoto />
        <div className="container-button-save">
          <button disabled={activeState} 
                  style={ !activeState ? {'cursor':'pointer'}:{'cursor':'none','opacity':'0.5' }} 
                  className='submit-form-button save' 
                  type="submit">
                    Actualizar
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default UpdateTheEntireProduct

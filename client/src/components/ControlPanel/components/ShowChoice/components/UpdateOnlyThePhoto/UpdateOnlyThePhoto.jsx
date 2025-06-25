import { useEffect, useState } from "react";
import { urlConnectionBackend } from "../../../../../../index";
import { SearchEngine } from "./components/search-engine/search-engine";
import UploadPhoto from './components/UploadPhoto';
import updateProductPhoto from "./services/updateProductPhoto";
import './UpdateOnlyThePhoto.css';

export let exportSetProductNameState;
export let exportSetProductIdState;
export let exportSetUploadPhotoState;

const UpdateOnlyThePhoto = () => {

  const [ productNameState, setProductNameState ] = useState('');
  const [ productIdState, setProductIdState ] = useState(0);
  const [ activeState, setActiveState ] = useState( true );
  const [ uploadPhotoState, setUploadPhotoState ] = useState('');
    
  exportSetProductNameState = setProductNameState;
  exportSetProductIdState = setProductIdState;
  exportSetUploadPhotoState = setUploadPhotoState;


  useEffect(() => {

    if( productNameState && uploadPhotoState ) setActiveState( false );

  }, [ productNameState, uploadPhotoState ]);

  

  return (
    
    <div className="container-Update-the-entire-product">

      <SearchEngine urlConnectionBackend={ urlConnectionBackend }/>

      <form className="form-update-product" onSubmit={ ( event ) => updateProductPhoto(event, productIdState, productNameState) }>
        <div>{ productNameState }</div>
        <UploadPhoto />
        <div className="container-button-save">
          <button disabled={activeState} 
                  style={ !activeState ? {'cursor':'pointer'}:{'cursor':'none','opacity':'0.5'}} 
                  className='submit-form-button save' 
                  type="submit" >
                    Actualizar
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default UpdateOnlyThePhoto

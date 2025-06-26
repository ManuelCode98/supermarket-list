import { useState } from "react";
import './UploadPhoto.css';
import { exportSetUploadPhotoState } from "../UpdateOnlyThePhoto";


const UploadPhoto = () => {

    const [uploadPhotoState, setUploadPhotoState] = useState('');
  
    const onChangeProductPhoto = ({ target })=>{

        const photo = target.files[0];
        const currentPhoto = URL.createObjectURL( photo );

        setUploadPhotoState( currentPhoto );
        exportSetUploadPhotoState( currentPhoto )

    }

  return (
        
        <div>
            <label htmlFor='input-file' className="label-file" >
                {   uploadPhotoState.length > 0 
                    ? <div className="div-img-upload">
                            <img className="img-temporary-url-control-panel" src={ uploadPhotoState } />
                      </div>  

                    : <div className="div-letter-upload">
                        <span className="material-symbols-outlined camera-control-panel">add_a_photo</span>
                      </div>
                }
                
            </label>
            <input type="file" accept='image/*' id='input-file' onChange={ onChangeProductPhoto } className="photo-img input-file" name="photo-img" />
        
        </div> 
    
  )
}

export default UploadPhoto

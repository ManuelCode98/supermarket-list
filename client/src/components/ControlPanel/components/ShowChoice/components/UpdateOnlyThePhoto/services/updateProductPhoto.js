import { http, urlConnectionBackend } from "../../../../../../../index";
import { savePhotoOfTheNewProduct } from "../../../../../../../services/save-photo-of-the-new-product";
import { exportFunctionSetAllproducts } from "../components/search-engine/search-engine";




const updateProductPhoto = async( event, id, product_name ) => {
  
    event.preventDefault();
    const { target } = event;
    const productPhotoFile = target[0].files[0];

    if( !product_name ) {
        
        swal.fire({
            title: 'Oh!',
            text: 'Parece que no seleccionaste ningún producto!',
            icon:'error',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000, 
        })    
        
        return
    
    };

    if( !productPhotoFile ) {
        
        swal.fire({
            title: 'Oh!',
            text: 'Parece que no subiste una foto valida!',
            icon:'error',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000, 
        })    
        
        return
    };

    const { success, url } = await savePhotoOfTheNewProduct( productPhotoFile )
    
    if( !success && !url ) return;
    
    try {
        const product = await http.put(`${urlConnectionBackend}api/update-product/${id}`, {
            product_name,
            product_photo: url,
        }, { timeout: 5000 })

        if( product ) exportFunctionSetAllproducts();

        swal.fire({
            text: 'Imagen actualizada',
            icon:'success',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000,
        })

    } catch ({ message }) {

        swal.fire({
            title: 'Oh!',
            text: 'No se puedo actualizar la imagen!',
            icon:'error',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000,
        })

        console.log(`No se puedo actualizar la imagen, ${message}`);
    }
    
    
    

    

}

export default updateProductPhoto;
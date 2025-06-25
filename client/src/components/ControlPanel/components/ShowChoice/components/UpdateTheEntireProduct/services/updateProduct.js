import { http, urlConnectionBackend } from "../../../../../../../index";
import { savePhotoOfTheNewProduct } from "../../../../../../../services/save-photo-of-the-new-product";
import { exportFunctionSetAllproducts } from "../components/search-engine/search-engine";



const updateProduct = async( event, id ) => {
    event.preventDefault();

    swal.fire({
        text: 'Actualizando el product, por favor espere...',
        icon:'warning',
        color: 'red',
        background: '#00000087',
        confirmButtonColor:'#01a503'
    });

    const { target } = event;
    const product_name = target[0].value;
    const productPhotoFile = target[1].files[0];

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
        })

        if( product ) exportFunctionSetAllproducts();
        
        swal.fire({
            text: 'Producto actualizado',
            icon:'success',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000,
        })
        
    } catch ({ message }) {
        
        swal.fire({
            title: 'Oh!',
            text: 'No se puedo actualizar el Producto!',
            icon:'error',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            timer: 3000,
        })

        console.log(`No se puedo actualizar el Producto, ${message}`);
    }
    
}

export default updateProduct

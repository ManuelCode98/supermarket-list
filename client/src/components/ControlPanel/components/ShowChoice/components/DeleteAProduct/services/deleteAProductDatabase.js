import { http, urlConnectionBackend } from "../../../../../../../index";
import { exportFunctionSetAllproducts } from "../components/search-engine/search-engine";



const deleteAProductDatabase = async( event, id, product_name, product_photo ) => {

    event.preventDefault();


    swal.fire({
        title: `Estas seguro que quieres eliminar este producto ${ product_name }!`,
        showCancelButton: true,
        icon:'warning',
        color: 'red',
        background: '#00000087',
        confirmButtonColor:'#01a503',
        cancelButtonColor: 'red',
    })
    .then( async({ isConfirmed }) =>{

        if( !isConfirmed ) return;

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

        swal.fire({
            text: 'Eliminando el product, por favor espere...',
            icon:'warning',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503'
        });

        try {

            const product = await http.delete(`${urlConnectionBackend}api/delete-product/${id}`, { timeout: 5000 })

            if( product ) exportFunctionSetAllproducts();

            swal.fire({
                text: 'Producto eliminado del inventario',
                icon:'success',
                color: 'red',
                background: '#00000087',
                confirmButtonColor:'#01a503',
                timer: 3000,
            })
            
        } catch ({ message }) {
            
            swal.fire({
                title: 'Oh!',
                text: 'No se puedo eliminar el producto del inventario!',
                icon:'error',
                color: 'red',
                background: '#00000087',
                confirmButtonColor:'#01a503',
                timer: 3000,
            })

            console.log(`No se puedo eliminar el producto del inventario, ${message}`);
        }

    });
    
};

export default deleteAProductDatabase

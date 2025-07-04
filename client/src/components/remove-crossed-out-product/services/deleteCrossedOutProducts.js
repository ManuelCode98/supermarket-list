import { http } from "../../../index";
import { uploadProductsAfterDeleting } from "../../add-product-to-list/add-product-to-list";




const deleteCrossedOutProducts = async( urlConnectionBackend ) => {
  
    try {
        const { data } = await http.get(`${urlConnectionBackend}api/get-crossed-out-products`, { timeout: 5000 } )

        const products = data.data;
        uploadProductsAfterDeleting( products )

    } catch ({ message }) {

        swal.fire({
            title:'Oh!',
            text:'No hay conexion con la base de datos!',
            icon:'error',
            color: 'red',
            background: '#00000087',
            confirmButtonColor:'#01a503',
            confirmButtonText: 'Ok',
            timer: 3000,
        })

        console.log(`No hay conexion con la base de datos, ${ message }`)
    }

}

export default deleteCrossedOutProducts

import { exportSetProductIdState, exportSetProductNameState } from "../../../UpdateTheEntireProduct";



const resultFieldSelection = async( { currentTarget }, inputSearch, setProductFoundByNameArr )=>{

    const { id, innerText,  } = currentTarget;

    if( innerText === 'Otros' ){

        swal.fire({
            title: 'Oh!',
            text: 'No le puedes hacer ninguna modificacion a este producto!',
            icon: 'error',
            confirmButtonText:'Ok',
            confirmButtonColor: '#01a503',
            color:'red',
            background: '#00000087',
            timer: 3000,

        })

        return
    }

    const product_name = innerText;

    exportSetProductIdState( id )
    exportSetProductNameState( product_name )
    inputSearch.current.value = '';
    setProductFoundByNameArr( [] );
};


export default resultFieldSelection;
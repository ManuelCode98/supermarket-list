import { exportSetProductIdState, exportSetProductNameState, exportSetProductPhotoState } from "../../../UpdateProductName";



const resultFieldSelection = async( { currentTarget }, inputSearch, setProductFoundByNameArr )=>{

    const { id, innerText,  } = currentTarget;

    const product_name = innerText; 
    const product_photo = currentTarget.querySelector('img').src;

    exportSetProductIdState( id )
    exportSetProductNameState( product_name )
    exportSetProductPhotoState( product_photo )
    inputSearch.current.value = '';
    setProductFoundByNameArr( [] );
};


export default resultFieldSelection;
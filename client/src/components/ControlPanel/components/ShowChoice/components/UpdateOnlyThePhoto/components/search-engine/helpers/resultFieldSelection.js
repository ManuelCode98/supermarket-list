import { exportSetProductIdState, exportSetProductNameState } from "../../../UpdateOnlyThePhoto";



const resultFieldSelection = async( { currentTarget }, inputSearch, setProductFoundByNameArr )=>{

    const { id, innerText,  } = currentTarget;

    const product_name = innerText; 

    exportSetProductIdState( id )
    exportSetProductNameState( product_name )
    inputSearch.current.value = '';
    setProductFoundByNameArr( [] );
};


export default resultFieldSelection;
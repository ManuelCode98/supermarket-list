import { savePhotoOfTheNewProduct } from "../../../services/save-photo-of-the-new-product";
import currentProductAddedDatabase from "../service/currentProductAddedDatabase";
import createProductDatabase from "../service/createProductDatabase";
import { setCurrentProductSelection, setInputAmountStateExport, setInputPriceStateExport, setInputProductNameStateExport, setProductPhotoOtherTemporaryExport } from "../add-product-to-list";




const currentProductAddedOther = async( inputAmountState, inputPriceState, receiveProductState, setReceiveProductState, inputProductNameState, productPhotoOtherState ) => {
     
    const product_name = inputProductNameState;
    const product_amount = inputAmountState;
    const product_price = inputPriceState;
    const crossed_out = 'not-crossed-out';
    
    const result = product_amount * product_price;
    
    if( productPhotoOtherState.name === undefined ){

        swal.fire({
            title: 'Oh!',
            text: 'Sin la foto del producto no puedes seguir!',
            icon: 'error',
            confirmButtonText:'Ok',
            confirmButtonColor: '#01a503',
            color:'red',
            background: '#00000087',
            timer: 3000,

        })

        return
    }

    if( product_name.length < 1 ){

        swal.fire({
            title: 'Oh!',
            text: 'Sin el nombre del producto no puedes seguir!',
            icon: 'error',
            confirmButtonText:'Ok',
            confirmButtonColor: '#01a503',
            color:'red',
            background: '#00000087',
            timer: 3000,

        })

        return
    }
    
    if( productPhotoOtherState ){
        
        const { success, url } = await savePhotoOfTheNewProduct( productPhotoOtherState )
        const product_photo = url

        if( success === true ){
            
            const productSaveDatabase = { product_photo, product_name, product_amount: 0, product_price: 0 };
            
            const waitingForTheId = await createProductDatabase( productSaveDatabase )
            const product = { id:waitingForTheId, product_photo, product_name, product_amount:[ 0, product_amount ], product_price: [ 0, product_price], result: [ 0, result], crossed_out };
            
            setReceiveProductState( prevArr => [...prevArr, product] )
            currentProductAddedDatabase( product, receiveProductState, setReceiveProductState )

            setProductPhotoOtherTemporaryExport('');
            setInputProductNameStateExport('');
            setInputAmountStateExport( 1 );
            setInputPriceStateExport( 1 );

            setCurrentProductSelection({});
        }
    };


}

export default currentProductAddedOther

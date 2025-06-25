import DeleteAProduct from "./components/DeleteAProduct/DeleteAProduct";
import UpdateOnlyThePhoto from "./components/UpdateOnlyThePhoto/UpdateOnlyThePhoto";
import UpdateProductName from "./components/UpdateProductName/UpdateProductName";
import UpdateTheEntireProduct from "./components/UpdateTheEntireProduct/UpdateTheEntireProduct";
import './ShowChoice.css'



const ShowChoice = ({ option }) => {


  return (
    <div className="show-choice">
        { option === 'defaultOption' && <> </> }
        { option === 'updateTheEntireProduct' && <UpdateTheEntireProduct/> }
        { option === 'updatePhoto' && <UpdateOnlyThePhoto/> }
        { option === 'updateProductName' && <UpdateProductName/> }
        { option === 'deleteAProduct' && <DeleteAProduct/> }
    </div>
  )
}

export default ShowChoice

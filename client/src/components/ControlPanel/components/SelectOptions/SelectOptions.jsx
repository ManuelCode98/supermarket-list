import './SelectOptions.css';


const SelectOptions = ( { setOption } ) => {

    const selectOptionsValue = ({ target }) =>{
        setOption( target.value )
    } 

  return (
    <>
        <select className='container-select-option' onChange={ selectOptionsValue }>
            <option value={ 'defaultOption' }>Que quires hacer</option>
            <option value={'updateTheEntireProduct'} style={{color:'blue'}}>Actualizar todo el producto</option>
            <option value={'updatePhoto'} style={{color:'blue'}}>Actualizar solo la foto de un producto</option>
            <option value={'updateProductName'} style={{color:'blue'}}>Actualizar solo el nombre de un producto</option>
            <option value={'deleteAProduct'} style={{color:'red'}}>Eliminar un producto</option>
        </select>
    </>
  )
}

export default SelectOptions

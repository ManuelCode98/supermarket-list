import { exportSetChangePanelState } from '../../../../App';
import './Question.css';



const Question = () => {

  const redirect = (  )=>{

    swal.fire({
      text:'Si no consigues un producto, escribe "otros" en la barra de busqueda',
      icon:'question',
      color: 'red',
      background: '#00000087',
      confirmButtonColor:'#01a503',
      confirmButtonText:'Ok',
      timer:3000,
    })
    .then( ({ isConfirmed }) =>{
      if( isConfirmed ){

        swal.fire({
          text:'Si quieres administrar el inventario, como actualizar o borrar porductos presiona "Si"',
          icon:'question',
          showCancelButton: true,
          color: 'red',
          background: '#00000087',
          confirmButtonColor:'#01a503',
          cancelButtonColor: 'red',
          confirmButtonText:'Si',
          cancelButtonText:'No',
          timer: 3000,
        })
        .then(({ isConfirmed })=>{

          if( isConfirmed ) exportSetChangePanelState( false );

        })

      }
    })

  }

  return (
    // <div className="button-question" >
      <span className='material-symbols-outlined button-question' onClick={ redirect }>question_mark</span>
    // </div>
  )
}

export default Question

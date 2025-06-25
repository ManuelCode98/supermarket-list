import { exportSetChangePanelState } from '../../../../App';
import './Question.css';



const Question = () => {

  const redirect = (  )=>{

    swal.fire({
      text:'Si no consigues un producto, escribe "otros" en la barra de busqueda',
      icon:'question',
      color: 'red',
      background: '#00000087',
      confirmButtonColor:'#01a503'
    })
    .then( ({ isConfirmed }) =>{
      if( isConfirmed ){

        swal.fire({
          text:'Si quieres administrar el inventario, como actualizar o borrar porductos presiona "OK"',
          icon:'question',
          showCancelButton: true,
          color: 'red',
          background: '#00000087',
          confirmButtonColor:'#01a503',
          cancelButtonColor: 'red',
        })
        .then(({ isConfirmed })=>{

          if( isConfirmed ) exportSetChangePanelState( false );

        })

      }
    })

  }

  return (
    <div className="button-question" >
      <div onClick={ redirect }>?</div>
    </div>
  )
}

export default Question

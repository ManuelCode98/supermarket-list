import { exportSetChangePanelState } from '../../../../App';
import './Question.css';



const Question = () => {

  const redirect = (  )=>{
  
    swal.fire({
      text:'Si quieres volver a la lista de los productos presiona "OK"',
      icon:'question',
      showCancelButton: true,
      color: 'red',
      background: '#00000087',
      confirmButtonColor:'#01a503',
      cancelButtonColor: 'red',
    })
    .then(({ isConfirmed })=>{

      if( isConfirmed ) exportSetChangePanelState( true );

    })

  } 
  
  return (
      <span className='material-symbols-outlined button-question-control-panel' onClick={ redirect }>question_mark</span>
  )

}

export default Question

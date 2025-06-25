import { useState } from "react";
import SelectOptions from "./components/SelectOptions/SelectOptions";
import ShowChoice from "./components/ShowChoice/ShowChoice";
import './ControlPanel.css';
import Question from "./components/Question/Question";



const ControlPanel = () => {
  const [option, setOption] = useState('');

  return (
    <div className="container-control-panel" >
      <div className="container-select-question">
        <SelectOptions setOption = { setOption } />
        <Question/>
      </div>
      <ShowChoice option = { option } />
    </div>
  )
}

export default ControlPanel

import { useState } from 'react';
import './App.css';
import Dialogbox from './components/Dialogbox';
import Kyccomponents from './components/kyc_component';

function App() {
  const [dialogboxstatus,setdialogboxstatus]=useState(true);
  return (
    <div className="App">
    <h1>Finhack</h1>
    <div className="btn btn-success mt-6" onClick={()=>{setdialogboxstatus(true);}}>Payment Schedule</div>
     {dialogboxstatus ? <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1}/> : null}
    
    </div>
  );
}

export default App;

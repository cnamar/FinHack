import { useState } from 'react';
import './App.css';
import Dialogbox from './components/Dialogbox';
import Kyccomponents from './components/kyc_component';

function App() {
  const [dialogboxstatus,setdialogboxstatus]=useState(false);
  return (
    <div className="App">
    <h1>Finhack</h1>
    <div class="btn btn-success mt-6" onClick={()=>{setdialogboxstatus(true);}}>Payment Schedule</div>
     {dialogboxstatus ? <Dialogbox/> : null}
    
    </div>
  );
}

export default App;

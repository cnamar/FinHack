import { useState } from "react";
import "./App.css";
import Usercomponent from "./components/users/Usercomponent";
import Kyccomponents from "./components/kyc_component";

function App() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  return (
    <div className="App">
      <div>
        <Usercomponent/>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Kyccomponents from "./components/kyc_component";
import Usercomponent from "./components/users/Usercomponent";
import Ownerscomponent from "./components/subscriptionowners/Ownerscomponent";
import UIComponent from "./components/MainUIComponent/UIComponent";

function App() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  /* return (
    <Router>
      <div className="App">
        <Route path="/user" component={Usercomponent} />
        <Route path="/owner" component={OwnerNavBar} />
        <Route path="/owner/create" component={Ownerscomponent} />
      </div>
    </Router>
  );*/
  return (
    <div>
      <UIComponent />
    </div>
  );
}

export default App;

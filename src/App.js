import { useState } from "react";
import "./App.css";
import Kyccomponents from "./components/kyc_component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Usercomponent from "./components/users/Usercomponent";
import Ownerscomponent from "./components/subscriptionowners/Ownerscomponent";
import OwnerNavBar from "./components/subscriptionowners/NavBar";

function App() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  return (
    <Router>
      <div className="App">
        <Route path="/user" component={Usercomponent} />
        <Route path="/owner" component={OwnerNavBar} />
        <Route path="/owner/create" component={Ownerscomponent} />
      </div>
    </Router>
  );
}

export default App;

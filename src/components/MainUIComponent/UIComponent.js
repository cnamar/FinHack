import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubscriptionsTable from "../subscriptionowners/SubscriptionsTable";
import Eventstable from "../users/Eventstable";
import Usercomponent from "../users/Usercomponent";
import NavBar from "./NavBar";

function UIComponent() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Usercomponent} />
        <Route path="/owner" component={SubscriptionsTable} />
      </div>
    </Router>
  );
}
//there is a button above routers for dialogboxed=s for each route
export default UIComponent;

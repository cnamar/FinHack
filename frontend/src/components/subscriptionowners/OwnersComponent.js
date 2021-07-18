import React, { useState } from "react";
import Dialogbox from "./DialogboxOwners";
import Eventstable from "./SubscriptionsTable";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
function Ownerscomponent() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  const [tableStatus, settableStatus] = useState(false);
  const [subscriptions, setsubscriptions] = useState([]);
  const handleClose = () => {
    setdialogboxstatus(false);
  };
  // setevents([
  //   ...events,
  //   { event: eventname, date: date, duration: duration },
  // ]);
  const handleCallback = (childData) => {
    // setevents(...events,{ event: childData.name, date: childData.date, duration: childData.duration });

    setsubscriptions([...subscriptions, childData]);
    setdialogboxstatus(false);
  };
  return (
    <div>
      <h1>Finhack</h1>
      <div
        className="btn btn-success mt-6"
        style={{ marginRight: "10px" }}
        onClick={() => {
          setdialogboxstatus(true);
        }}
      >
        Add Subscription
      </div>
      <div
        className="btn btn-success mt-6"
        onClick={() => {
          settableStatus(true);
        }}
      >
        Details
      </div>
      <Dialog
        open={dialogboxstatus}
        onClose={handleClose}
        style={{ borderRadius: "10" }}
      >
        <Dialogbox name={"aaa"} Amount={"2000"} callBack={handleCallback} />
      </Dialog>
      {/* {dialogboxstatus ? (
        <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} callBack={handleCallback}/>
      ) : null
      
      }, */}
      {tableStatus ? <Eventstable state={subscriptions} /> : null},
    </div>
  );
}

export default Ownerscomponent;

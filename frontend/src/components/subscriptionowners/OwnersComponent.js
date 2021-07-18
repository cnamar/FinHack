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
      <div>
      <h1 style={{float:'left',  marginLeft: "10px",}}>Finhack</h1>
      <div
        className="btn btn-success mt-6"
        style={{ marginLeft: "20px", marginTop:"5px"}}
        onClick={() => {
          setdialogboxstatus(true);
        }}
      >
        Add Subscription
      </div>

      </div>
      <br />
      
      
      
      <Dialog
        open={dialogboxstatus}
        onClose={handleClose}
        style={{ borderRadius: "10" }}
      >
        <Dialogbox name={""} amount={""} callBack={handleCallback} />
      </Dialog>
      {/* {dialogboxstatus ? (
        <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} callBack={handleCallback}/>
      ) : null
      
      }, */}
      {subscriptions.length>0 ? <Eventstable state={subscriptions} /> : null},
    </div>
  );
}

export default Ownerscomponent;

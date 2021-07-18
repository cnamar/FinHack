import React, { useState } from "react";
import Dialogbox from "./Dialogbox";
import Eventstable from "./Eventstable";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";
function Usercomponent() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  const [tableStatus, settableStatus] = useState(false);
  const [events, setevents] = useState([]);
  const handleClose = () => {
    setdialogboxstatus(false);
  };
  // setevents([
  //   ...events,
  //   { event: eventname, date: date, duration: duration },
  // ]);
  const handleCallback = (childData) => {
    // setevents(...events,{ event: childData.name, date: childData.date, duration: childData.duration });

    setevents([...events, childData]);
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
        Payment Schedule
      </div>

      </div>
      <br />
      
      <Dialog
        open={dialogboxstatus}
        onClose={handleClose}
        style={{ borderRadius: "10" }}
      >
        <Dialogbox
          
          callBack={handleCallback}
        />
      </Dialog>
      {/* {dialogboxstatus ? (
        <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} callBack={handleCallback}/>
      ) : null
      
      }, */}
      
      {events.length>0 ? <Eventstable state={events} /> : <h5>Table is empty</h5>},
    </div>
  );
}

export default Usercomponent;

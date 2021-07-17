import React, { useState } from "react";
import Dialogbox from "./Dialogbox";
import Eventstable from "./Eventstable";


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
function Usercomponent() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  const [tableStatus, settableStatus] = useState(false)
  const [events, setevents] = useState([]);
  const handleClose = () => {
    setdialogboxstatus(false);
  };
  // setevents([
  //   ...events,
  //   { event: eventname, date: date, duration: duration },
  // ]);
  const handleCallback = (childData) =>{
    // setevents(...events,{ event: childData.name, date: childData.date, duration: childData.duration });
    
    
    setevents([...events,childData]);
    setdialogboxstatus(false);
  }
  return (
    <div>
      <h1>Finhack</h1>
      <div
        className="btn btn-success mt-6"
        style={{marginRight:"10px"}}
        onClick={() => {
          setdialogboxstatus(true);
        }}
      >
        Payment Schedule
      </div>
      <div
        className="btn btn-success mt-6"
        onClick={() => {
          settableStatus(true)
        }}
      >
        Details
      </div>
      <Dialog open={dialogboxstatus} onClose={handleClose} style={{borderRadius:'10'}}>
        
      <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} callBack={handleCallback}/>
        
      </Dialog>
      {/* {dialogboxstatus ? (
        <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} callBack={handleCallback}/>
      ) : null
      
      }, */}
      
      {tableStatus ? (
        <Eventstable state={events}/>
      ) : null
      
      },
      
      
    </div>
  );
}

export default Usercomponent;

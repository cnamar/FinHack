import React, { useState } from "react";
import Dialogbox from "./Dialogbox";

function Usercomponent() {
  const [dialogboxstatus, setdialogboxstatus] = useState(false);
  return (
    <div>
      <h1>Finhack</h1>
      <div
        className="btn btn-success mt-6"
        onClick={() => {
          setdialogboxstatus(true);
        }}
      >
        Payment Schedule
      </div>
      {dialogboxstatus ? (
        <Dialogbox name={"aaa"} date={"2020-01-01"} duration={1} />
      ) : null}
    </div>
  );
}

export default Usercomponent;

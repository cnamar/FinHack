import React, { useState } from "react";
import CreateSubscription from "./create-subscription";

function Ownerscomponent() {
  const [subscriptionboxstatus, setsubscriptionboxstatus] = useState(false);
  return (
    <div>
      <h1>Finhack</h1>
      <div
        className="btn btn-success mt-6"
        onClick={() => {
          setsubscriptionboxstatus(true);
        }}
      >
        Add Subscription
      </div>
      {subscriptionboxstatus ? <CreateSubscription /> : null}
    </div>
  );
}

export default Ownerscomponent;

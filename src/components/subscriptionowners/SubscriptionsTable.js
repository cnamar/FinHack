import React, { useEffect } from "react";
import "./subscriptionstable.css";
function SubscriptionsTable(props) {
  var subscriptions = props.subscriptions;

  /* return (
    <div class="mt-5 ml-3 mr-3">
      <table className="viewtable">
        <tr style={{ border: "2px solid white" }}>
          <th style={{ border: "2px solid white" }}>Subscription Name</th>
          <th style={{ border: "2px solid white" }}>Subscription Amount</th>
        </tr>
        {subscriptions.map((object) => {
          return (
            <tr style={{ border: "1px solid white" }}>
              <td style={{ border: "1px solid white" }}>{object.name}</td>
              <td style={{ border: "1px solid white" }}>{object.amount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );*/
  return <div>hii</div>;
}

export default SubscriptionsTable;

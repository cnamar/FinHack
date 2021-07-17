import React, { useState } from "react";
import SubscriptionsTable from "./SubscriptionsTable";

function CreateSubscription() {
  const [subscriptionname, setsubscriptionname] = useState("");
  const [subscriptionAmount, setsubscriptionAmount] = useState(0);
  const [tablestatus, settablestatus] = useState(false);
  const [subscriptions, setsubscriptions] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setsubscriptions([
      ...subscriptions,
      {
        name: subscriptionname,
        amount: subscriptionAmount,
      },
    ]);
    settablestatus(true);
  };
  return (
    <div id="subscriptionbox" style={{ marginTop: "10rem" }}>
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Subscription Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="subscriptionname"
                    className="textfield1"
                    value={subscriptionname}
                    onChange={(e) => setsubscriptionname(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Subscription Amount</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="subscriptionamount"
                    className="textfield1"
                    value={subscriptionAmount}
                    onChange={(e) => setsubscriptionAmount(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Confirm" id="submitsub" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      {tablestatus ? (
        <SubscriptionsTable subscriptions={subscriptions} />
      ) : null}
    </div>
  );
}

export default CreateSubscription;

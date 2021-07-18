import React from "react";

function Subscriptionstable({ state }) {
  return (
    <table style={{ border: "1" }}>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default Subscriptionstable;

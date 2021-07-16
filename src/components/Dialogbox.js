import { useEffect } from "react";
import { useState } from "react";

function Dialogbox() {
  const [eventname, setEventName] = useState("");
  const [date, setdate] = useState(1);
  const [duration, setduration] = useState(5);
  const [events, setevents] = useState([]);
  useEffect(() => {
    console.log(events);
  }, [events]);
  const onsubmit = () => {
    setevents([
      ...events,
      { event: eventname, date: date, duration: duration },
    ]);
    console.log(events);
  };
  return (
    <div id="dialogbox" style={{ marginTop: "10rem" }}>
      <div class="container">
        <form>
          <label for="eventname">Event Name:</label>
          <br />
          <input
            type="text"
            id="eventname"
            name="fname"
            value={eventname}
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
          <br />
          <label for="paymentdate">Date at which payment to be done:</label>
          <br />
          <input
            type="number"
            id="paymentdate"
            min="1"
            max="30"
            name="paymentdate"
            value={date}
            onChange={(event) => {
              setdate(event.target.value);
            }}
          />
          <label for="duration">Duration(No of Years)</label>
          <br />
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={(event) => {
              setduration(event.target.value);
            }}
          />
          <div className="form-group">
            <div
              value="save event"
              className="btn btn-primary"
              onClick={onsubmit}
            >
              save event
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Dialogbox;

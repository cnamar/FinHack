import { useState } from "react";

function Dialogbox(){
    const [eventname,setEventName]=useState("");
    const [date,setdate]=useState(1);
    const [duration,setduration]=useState(5);
    return(<div id="dialogbox" style={{marginTop:"10rem"}}>
        <div class="container">
         <form>
  <label for="eventname">Event Name:</label><br/>
  <input type="text" id="eventname" name="fname"/><br/>
  <label for="paymentdate">Date at which payment to be done:</label><br/>
  <input type="date" id="paymentdate" name="paymentdate"/>
  <label for="duration">Duration(No of Years)</label><br/>
  <input type="date" id="duration" name=""/>
</form> 
        </div>
       
        hello
    </div>)
}
export default Dialogbox;
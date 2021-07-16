import { useState } from "react";
import './Dialogbox.css'
function Dialogbox(props){
    const [eventname,setEventName]=useState(props.name);
    const [date,setdate]=useState(props.date);
    const [duration,setduration]=useState(props.duration);
    const handleSubmit= (e) => {
        console.log(eventname+date+duration);
        e.preventDefault();
      }
    return(<div id="dialogbox" style={{marginTop:"10rem"}}>
        <div className="container">
         <form onSubmit={e => { handleSubmit(e)}}>
             <table><tbody>
                 <tr>
                     <td><label  >Event Name:</label></td>
                     <td><input type="text" name="eventname" className="textfield1"  value={eventname} onChange={e => setEventName(e.target.value)}/></td>
                 </tr>
                 <tr>
                     <td><label >Date at which payment to be done:</label></td>
                     <td><input type="date" name="paymentdate" className="textfield1" value={date} onChange={e => setdate(e.target.value)}/></td>
                 </tr>
                 <tr>
                     <td><label>Duration(No of Years)</label></td>
                     <td><input type="number" name="duration" className="textfield1" value={duration} onChange={e => setduration(e.target.value)}/></td>
                 </tr>
                 <tr>
                     <td></td>
                     <td><input type="submit" value="Confirm" id="submit"/></td>
                 </tr>
                 </tbody>
             </table>
        </form> 
        </div>       
    </div>)
}
export default Dialogbox;
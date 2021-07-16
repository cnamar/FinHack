import axios from "axios";
import { useState } from "react";
import { nodeurl } from "../constants/apiurls";

function Kyccomponents(){
    const[data,setdata]=useState("no");
    axios.get(nodeurl).then((response)=>{
        setdata(response.data.name);
    })
    .catch((err)=>{
        console.log("error is"+ err);
    })
    return(<div>
    data is {data}
    </div>);
}
export default Kyccomponents;
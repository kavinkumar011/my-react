import { useState } from "react";

export function Companieslist() {
    const [show,setshow]=useState("true");
    
  return (
    <div className="companieslist">
      <h2>Companies and vaccanies</h2>

      <button onClick={()=>{setshow(!show)}}> Showcompanies</button>
      
      {show ? <div>
      <p>new
Protection Design Engineer / Substation HV Design Engineer
UK Power Engineers (India) Pvt Ltd
Chennai, Tamil Nadu
Temporarily Remote
vaccanies:10</p>
<p>new
Tele calling Internship
Medway Technologies Private Limited
Bengaluru, Karnataka
vaccanies:25
</p>
<p>new
Warehouse Assistant
Excellent Engineering Enterprises
Coimbatore, Tamil Nadu
₹13,000 - ₹15,000 a month
vaccanies:15</p>
<p>new
Business Analysis
JPMorgan Chase Bank, N.A.3.9
Mumbai, Maharashtra
vaccanies:20</p>
<p>new
Order & Logistics Coordinator
B-Arm Medical Technologies Private limited
Coimbatore, Tamil Nadu
vaccanies:50</p>
<p>new
Order & Logistics Coordinator
B-Arm Medical Technologies Private limited
Coimbatore, Tamil Nadu
vaccanies:50</p>
<p>new
Warehouse Assistant
Excellent Engineering Enterprises
Coimbatore, Tamil Nadu
₹13,000 - ₹15,000 a month
vaccanies:15</p>
<p>new
Order & Logistics Coordinator
B-Arm Medical Technologies Private limited
Coimbatore, Tamil Nadu
vaccanies:50</p>
<p>new
Warehouse Assistant
Excellent Engineering Enterprises
Coimbatore, Tamil Nadu
₹13,000 - ₹15,000 a month
vaccanies:15</p>
</div> :" " }
    </div>
  );
}

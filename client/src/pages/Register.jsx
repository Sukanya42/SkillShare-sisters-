import { useState } from "react";
import axios from "axios";

export default function Register(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const register=async()=>{
    await axios.post("http://localhost:5000/api/auth/register",{name,email,password});
    alert("Registered");
  }

  return(
    <div className="p-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <input className="border p-2 m-2" placeholder="name" onChange={e=>setName(e.target.value)} />
      <input className="border p-2 m-2" placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <input className="border p-2 m-2" type="password" onChange={e=>setPassword(e.target.value)} />
      <button className="bg-indigo-600 text-white px-4 py-2">Create</button>
    </div>
  )
}

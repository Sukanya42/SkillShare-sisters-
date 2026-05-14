import { useState } from "react";
import axios from "axios";

export default function Login(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const login=async()=>{
    await axios.post("http://localhost:5000/api/auth/login",{email,password});
    alert("Login success");
  }

  return(
    <div className="p-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input className="border p-2 m-2" placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <input className="border p-2 m-2" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
      <button className="bg-indigo-600 text-white px-4 py-2">Login</button>
    </div>
  )
}

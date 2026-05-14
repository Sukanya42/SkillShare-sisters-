import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Home(){
  const [skills,setSkills]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/skills")
    .then(res=>setSkills(res.data));
  },[]);

  return(
    <div>
      <Navbar/>

      {/* HERO */}
      <div className="text-center py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <h1 className="text-4xl font-bold">Share Skills. Earn. Grow 🚀</h1>
        <p className="text-gray-600 mt-2">A women empowerment skill marketplace</p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 p-10">
        {skills.map((s,i)=>(
          <div key={i} className="bg-white shadow rounded-xl p-5 hover:shadow-xl">
            <h2 className="font-bold text-indigo-600">{s.title}</h2>
            <p className="text-gray-600">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

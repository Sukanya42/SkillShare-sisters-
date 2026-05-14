export default function Navbar(){
  return(
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">Skillshare Sisters 💜</h1>
      <div className="space-x-4">
        <button className="px-4 py-2">Login</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">Join</button>
      </div>
    </nav>
  )
}

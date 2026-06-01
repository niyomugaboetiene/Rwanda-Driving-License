import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="fixed top-0 left-0 right-0">
            <div className="bg-green-500 py-1 px-4">
                   <div className="flex justify-end">
                    <button>Login</button>
                    <button>Register</button>
                   </div>
            </div>
           <div className="h-20 bg-white shadow-xl">
            <div className="flex justify-between">
               <div className="bg-linear-to-br from-green-400 to-yellow-500 via-blue-500 text-transparent bg-clip-text">
                 <h1 className="text-3xl ms-12 text-wrap mt-5 font-bold">RDL</h1>
               </div>

               <div>
                 <nav className="flex space-x-4 mt-6 font-light text-gray-800">
                    <Link className="hover:text-green-500 transition-colors">Home</Link>
                    <Link className="hover:text-green-500 transition-colors" to={'/candidate/list'}>Candidates</Link>
                    <Link className="hover:text-green-500 transition-colors" to={'/grades/list'}>Grades</Link>
                </nav>
               </div>
               <div>
                Admin Data
               </div>
            </div>
        </div>
        </div>
      
    )
}

export default Nav;
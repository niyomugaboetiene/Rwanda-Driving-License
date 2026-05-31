import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="fixed h-20 top-0 left-0 right-0 bg-white shadow-xl">
            <div className="flex justify-between">
               <div className="bg-linear-to-br from-green-400 to-yellow-500 via-blue-500 text-transparent bg-clip-text">
                 <h1 className="text-3xl ms-12 text-wrap mt-5 font-bold">RDL</h1>
               </div>

               <div>
                 <nav>
                    <Link>Home</Link>
                    <Link>Candidates</Link>
                    <Link>Grades</Link>
                </nav>
               </div>
               <div>
                Admin Data
               </div>
            </div>
        </div>
    )
}

export default Nav;
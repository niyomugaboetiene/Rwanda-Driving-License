import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="fixed h-fit bottom-0 left-0 right-0 bg-stone-900 shadow-xl">
            <div className="flex justify-between">
               <div className="bg-linear-to-br from-green-400 to-yellow-500 via-blue-500 text-transparent bg-clip-text">
                 <h1 className="text-3xl ms-12 text-wrap mt-5 font-bold">RDL</h1>
               </div>

               <div>
                 <nav className="space-y-4 mt-6 font-light text-green-500">
                    <h1 className="font-bold text-xl border-s-3 border-purple-500">Quick Link</h1>
                    <Link className="hover:text-green-500 transition-colors block">Home</Link>
                    <Link className="hover:text-green-500 transition-colors block" to={'/candidate/list'}>Candidates</Link>
                    <Link className="hover:text-green-500 transition-colors " to={'/grades/list'}>Grades</Link>
                </nav>
               </div>
               <div>
                Admin Data
               </div>
            </div>
        </div>
    )
}

export default Footer;
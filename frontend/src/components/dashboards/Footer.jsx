import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="fixed h-fit bottom-0 left-0 right-0 bg-stone-900 shadow-xl">
            <div className="flex justify-between">
               <div className="bg-linear-to-br from-green-400 to-yellow-500 via-blue-500 text-transparent bg-clip-text w-1/8">
                 <h1 className="text-3xl ms-12 text-wrap mt-5 font-bold">RDL</h1>
                 <p className="text-white ms-12">Rwanda Driving License allows you to track grades and candidates more effectively</p>
               </div>

               <div>
                 <nav className="space-y-4 mt-6 font-bold text-white">
                    <h1 className="font-bold text-xl border-s-3 border-purple-500">Quick Link</h1>
                    <Link className="hover:text-green-500 transition-colors block">Home</Link>
                    <Link className="hover:text-green-500 transition-colors block" to={'/candidate/list'}>Candidates</Link>
                    <Link className="hover:text-green-500 transition-colors " to={'/grades/list'}>Grades</Link>
                </nav>
               </div>
                 <div className="space-y-4 mt-6 font-bold text-white">
                    <h1 className="font-bold text-xl border-s-3 border-sky-500">Contact Us</h1>
                    <p className="hover:text-green-500 transition-colors block">niyomugaboetiene53@gmail.com</p>
                    <p className="hover:text-green-500 transition-colors block">0728184299</p>
                </div>
                 <div className="me-5">
                  <h1 className="text-xl border-s-3 border-blue-500 text-white font-bold">Let's go on Social</h1>
                    <div className="grid grid-cols-2 space-y-4 mt-6 font-bold text-white">
                    <p className="hover:text-green-500 transition-colors">Youtube</p>
                    <p className="hover:text-green-500 transition-colors ">Tsap</p>
                    <p className="hover:text-green-500 transition-colors ">IG</p>
                    <p className="hover:text-green-500 transition-colors ">IG</p>
                    </div>
                </div>
            </div>
            <hr className="text-white"/>
                 <div className="text-white">
                    <p className="text-center">&copy; 2026 All right reserved</p>
                </div>
        </div>
    )
}

export default Footer;
import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaLinkedinIn, FaFreeCodeCamp, FaChalkboardTeacher, FaConnectdevelop } from "react-icons/fa"
export default function navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="pros pros-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link href='/' className="text-white/90 no-underline hover:text-white font-bold">
            Syed J.
        </Link>
        </h1> 
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/@JamshedAliSyed">
                        <FaYoutube />
                    </Link>
                    
                    <Link className="text-white/90 hover:text-white" href="https://github.com/SyedJamshedAli/">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/syedjamshedali/">
                        <FaLinkedinIn />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.upwork.com/freelancers/~0189c68c364c117985d">
                        <FaConnectdevelop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://courses.SyedJ.com">
                        <FaChalkboardTeacher />
                    </Link>
                    
                    
                </div>
        </div>

        
        </nav>
  )
}

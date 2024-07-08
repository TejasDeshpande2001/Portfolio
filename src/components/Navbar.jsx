import logo from "../assets/td.jpg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaHackerrank} from "react-icons/fa";
import {FaMailBulk} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
       <nav className=" mb-20 flex items-center justify-between py-6">
       <div className=" flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 " src={logo} alt="logo" />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/killertej"><FaGithub /></a>
        <a href="tejasdeshpande29@gmail.com"><FaMailBulk /></a>
        <a href="https://www.hackerrank.com/profile/tejasdeshpande29"><FaHackerrank /></a>
        <a href="https://www.linkedin.com/in/tejas-deshpande-9a9011269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        
        
        
       </div>
       </nav>
        
      
    </>
  )
}

export default Navbar;

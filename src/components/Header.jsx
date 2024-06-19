import logo from "../assets/images/Netflix-logo.png";
import lan from "../assets/images/language.svg"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full flex justify-between px-40 py-6 
      bg-transparent z-10">
        <div>
          <div>
            <img src={logo} alt="NETFLIX" width={150} />
          </div>
        </div>
        <div className="flex justify-items-center align-middle">
          <div className="flex flex-row bg-black --tw-back text-white px-2 h-8 w-36 rounded-md 
           outline outline-1 outline-gray">
            <div className="z-30 flex items-center align-middle"><img src={lan} width={20} alt="language"/></div>
            <select className="bg-black h-full w-full select-text focus-visible:outline-none  
            focus:border-none border-none bg-transparent leading-tight">
              <option selected  value='English' className="w-36 h-full bg-black visited:bg-gray-300 focus-visible:outline-none p-2 border-0">English</option>
              <option value='Persian' className="w-36 h-full bg-black visited:bg-gray-300 focus-visible:outline-none p-2 border-0">Persian</option>
            </select> 
          </div>
          <Link className="flex items-center align-middle bg-red ml-8 hover:bg-red-100 text-white py-0 px-4 rounded-md 
          h-8 cursor-pointer" to='/SignUp'>
          Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import logo from "../assets/images/Netflix-logo.png";
import lan from "../assets/images/language.svg";
import { Link } from "react-router-dom";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [language , setLanguage] = useState('English');

  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full flex justify-between px-40 py-6 
      bg-transparent z-10"
      >
        <div>
          <div>
            <img src={logo} alt="NETFLIX" width={150} />
          </div>
        </div>
        <div className="flex justify-items-center align-middle">

        <div className="relative inline-block text-left">
              <div className="flex justify-items-center align-middle w-36 z-30">
                <button type="button" class="inline-flex align-middle w-full rounded-md bg-black text-white h-8 px-2 py-1.5 text-sm outline outline-1 outline-gray" onClick={() => setIsOpen(!isOpen)}>
                  <div className="mr-1">
                    <img src={lan} width={20} alt="language" />
                  </div>
                  <div className="flex flex-row justify-between justify-items-center gap-8">
                    <div>{language}</div>
                    <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
              {isOpen &&<div className="absolute right-0 z-10 mt-0.5 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <div className="block mx-1 px-3 py-2 text-sm bg-gray-700 text-black hover:bg-gray-600 hover:text-white cursor-pointer" onClick={()=>{setLanguage('English'); setIsOpen(!isOpen)}}>English</div>
                  <div className="block mx-1 px-3 py-2 text-sm bg-gray-700 text-black hover:bg-gray-600 hover:text-white cursor-pointer" onClick={()=>{setLanguage('Persian'); setIsOpen(!isOpen)}}>Persian</div>
                </div>
              </div>}
            </div>


          <Link
            className="flex items-center align-middle bg-red ml-8 hover:bg-red-100 
          text-white py-0 px-4 rounded-md h-8 cursor-pointer"
            to="/SignUp"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

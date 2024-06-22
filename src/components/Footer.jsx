import { Link } from "react-router-dom";
import lan from "../assets/images/language.svg";
import { useState } from "react";

const Footer = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [language , setLanguage] = useState('English');

  return (
    <div className="bg-black text-gray-700 px-40 pb-40">
      <div className="container py-3 text-sm flex flex-col font-normal gap-6">
        <div className="text-base mb-4">
          Questions? Call
          <Link className="underline" to="tel:1-844-542-4813">
            1-844-542-4813
          </Link>
        </div>
        <div className="flex flex-row gap-20 justify-between justify-items-start">
          <div className="flex flex-col gap-6">
          <Link className="underline">FAQ</Link>
            <Link className="underline">Investor Relations</Link>
            <Link className="underline">Buy Gift Cards</Link>
            <Link className="underline">Cookie Preferences</Link>
            <Link className="underline">Legal Notices</Link>

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

            <h4>Netflix Canada</h4>
          </div>
          <div className="flex flex-col gap-6">
            <Link className="underline">Help Center</Link>
            <Link className="underline">Jobs</Link>
            <Link className="underline">Ways to Watch</Link>
            <Link className="underline">Corporate Information</Link>
            <Link className="underline">Only on Netflix</Link>
          </div>
          <div className="flex flex-col gap-6">
          <Link className="underline">Account</Link>
            <Link className="underline">Netflix Shop</Link>
            <Link className="underline">Terms of Use</Link>
            <Link className="underline">Contact Us</Link>
            <Link className="underline">Ad Choices</Link>
          </div>
          <div className="flex flex-col gap-6">
          <Link className="underline">Media Center</Link>
            <Link className="underline">Redeem Gift Cards</Link>
            <Link className="underline">Privacy</Link>
            <Link className="underline">Speed Test</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

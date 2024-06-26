import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chevron from "../assets/images/right-chevron.svg"
import multiply from "../assets/images/multiply.svg"

const MembershipForm = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [error, setError] = useState('');
    const [emailArray, setEmailArray] = useState([]);
    const navigate = useNavigate();

    const validateEmail = (e) => {

        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email.match(emailPattern)) {
          setError('');
          setIsValidEmail(false);
        } else{
            handleEmailValidation()
        }
      };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then((response) => response.json())
          .then((data) => {
            const emails = data.map((item) => item.email);
            setEmailArray(emails);
          });
      }, []);
    
    const handleEmailValidation = () => {  
      if (emailArray.includes(email)) {
        navigate('/BrowseToWatch');
      } else {
        navigate('/SignUp');
        };
    }


  return (
    <div className='z-50'>
        <form className='flex flex-col justify-center items-center'>
            <h3 className='text-white text-center text-xl'>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='flex flex-row justify-around items-center mt-5'>

                <div className={`py-4 bg-black-700 z-50 w-96 px-6 rounded outline outline-1 
                    outline-gray text-gray-300 relative
                    ${isFocused || email ? 'border-gray-200' : ''}
                    ${!isValidEmail ? 'border-solid border-red border-2' : 'border-none'}`}>

                    <label htmlFor='member' className={`floating-label absolute transition-all duration-200 
                        ${isFocused || email ? 'text-sm -top-0.5' : 'top-1/3'}`}>
                        Email address
                    </label>
                    <input 
                    id='member' 
                    type="email"
                    required
                    value={email} 
                    onChange={(e) => {setIsValidEmail(true);ErrorMessage("");setEmail(e.target.value)}}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}                    
                    className={`bg-transparent focus:bg-transparent autofill:bg-transparent 
                    text-white focus:border-none outline-none focus:outline-none 
                    ${!isValidEmail ? 'border-solid border-red border-2 w-full pl-1' : 'border-none'}`}/>

                    {!isValidEmail && <ErrorMessage message="Please enter a valid email address." />}
                </div>
                <button className='bg-red hover:bg-red-100 focus:bg-black flex flex-row items-center py-3 
                px-6 ml-2 rounded text-white text-2xl cursor-pointer z-50' onClick={validateEmail}>
                    Get Started
                    <div className='pl-4'>
                        <img src={chevron} alt='chevron' width="20px"/>
                    </div>
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </form>
    </div>
  )
}

const ErrorMessage = ({ message }) => {
    return (<div className='flex flex-row justify-start items-center absolute -bottom-8'>
        <img src={multiply} alt='multiply' width='20px'/>
        <p className="text-red">{message}</p>
    </div>);
};

export default MembershipForm
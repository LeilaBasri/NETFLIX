import React from 'react'
import Header from '../components/Header';
import Devices from '../assets/images/Devices.png'

function SetUpAccount() {
  return (
    <div>
        <Header/>
        
        <div className='flex flex-col justify-center items-center'>
            <div><img src={Devices} alt='Devices' /></div>
            <div className='text-center'>
                <span>STEP <b>1</b><b>3</b> OF </span>
                <h1>Finish setting up your account</h1>
            </div>
            <div className='text-center'>
            Netflix is personalized for you. Create a password to start watching Netflix.
            </div>
            <div className='items-center'><button className='bg-red text-white w-32 h-12'>Next</button></div>
        </div>
    </div>
  )
}

export default SetUpAccount
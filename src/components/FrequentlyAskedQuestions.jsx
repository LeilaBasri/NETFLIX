import React from 'react'
import CardAccordionList from './CardAccordionList'
import MemberShipForm from './MembershipForm'

const FrequentlyAskedQuestions = () => {
  return (
    <div className='w-full min-h-max flex flex-col justify-center bg-black py-20'>
        <div className='w-5/6 m-auto flex flex-col justify-center'>
            <div className='basis-1/2 text-center w-full text-white z-0'>
                <h2 className='font-black text-5xl'>Frequently Asked Questions</h2>
                <div className='w-full mt-6'>
                    <CardAccordionList/>
                </div>
            </div>
        </div>
        <div className='mt-6 mb-20'>
          <MemberShipForm/>
        </div>
        <div className="w-full h-2 bg-wb"></div>
    </div>
  )
}

export default FrequentlyAskedQuestions
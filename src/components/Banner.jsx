import bg from '../assets/images/banner-bg.jpg'
import Header from './Header'
import MembershipForm from './MembershipForm'
const Banner = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center absolute top-0 left-0 
       h-72 w-3/4 mx-40 scroll-m-10 my-56 basis-2/4 z-10'>
          <h1 className='bg-transparent text-white font-sans text-5xl text-center 
          font-black w-full'>Unlimited movies, TV shows, and more</h1>
          <p className='text-white font-sans text-2xl text-center leading-snug my-6'>Watch anywhere. Cancel anytime.</p>
          <MembershipForm />
       </div>
       
      <div className='relative -z-50 flex w-full h-auto'>
        <div className='w-full h-auto'>
          <img className='w-full h-screen object-cover -z-50' src={bg} alt='banner'/>
          <div className='bg-black opacity-50 w-full h-screen object-cover absolute 
          top-0 left-0 -z-0'></div>
        </div>

      </div>
    </div>
  )
}

export default Banner
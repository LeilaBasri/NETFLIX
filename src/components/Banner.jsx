import bg from '../assets/images/banner-bg.jpg'
import Header from './Header'
const Banner = () => {
  return (
    <div>
      <Header />
      <div className='relative -z-40'>
        <img className='w-full h-screen object-cover -z-40' src={bg} alt='banner'/>
        <div className='bg-black opacity-50 w-full h-screen object-cover absolute top-0 left-0 z-10'></div>
      </div>
    </div>
  )
}

export default Banner
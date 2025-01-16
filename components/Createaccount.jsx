
  import React from 'react'

export default function Createaccount() {
  
  return (
    <>
     <div className='max-md:bg-cover w-100% h-100% flex bg-cover bg-center items-center justify'
    style={{
        backgroundImage: `url('/images/background1.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
    <div className='flex max-md:mr-8 max-sm:ml-8 max-md:mt-28 max-md:mb-60  max-w-1/3 mx-auto h-3/4  bg-white flex-col my-12 mx-29 pl-4 pr-4 rounded-md'>
        <h1 className='flex mt-3 text-xl text-black font-bold pt-2 relative'>TRIALSHOPPY</h1>
     <div className='flex w-full flex-col max-w-[450px]  justify-between'>
    <div className='flex w-full flex-col mb-2'>
        <p className='flex text-xl font-semibold mb-4 my-2'>Create Account</p>
 <p className='flex-wrap text-xs mb-2 text-gray-500'>one last step before starting your free trail</p>
    </div>
   
  <div className='flex w-full flex-col'>
    <input
    type='email'
    placeholder=' Email or Mobile number'
    className='w-full  py-1 border border-gray-700 rounded-md'/>
  </div>
  <div className='flex grid-flow-row my-3 justify-between'>
    <input type="text" 
    placeholder='First-name' 
    className='flex border w-1/2 max-md:mr-3 border-gray-700 py-1 px-2 rounded-md' />
     <input type="text" 
    placeholder=' Last-name' 
    className='flex border  border-gray-700 py-1 rounded-md' />
  </div>
<p className='flex text-xs mb-2 text-gray-500'>Enter your first and last name as they appear on your government-issued ID</p>
 <div className=' grid-flow-col max-md:gap-3  justify-between'>
    <input type="text" 
    placeholder='Password' 
    className='flex border w-full border-gray-500 py-1 px-2 rounded-md my-2' />
     <input type="text" 
    placeholder='Confirm New Password' 
    className='flex border w-full border-gray-500 py-1 px-2 rounded-md my-2' />
</div>


  <div className='w-full flex flex-col my-1'>
    <button className='w-full text-white my-2 bg-orange-400  rounded-md p-1 text-center flex items-center justify-center'>Create Account</button>
  </div>

 
    
   
  </div>
  
 
  <div className='flex'>
        <input type="radio" className='w-4 h-4 mr-2 ' />
        <p className='flex text-xs mb-2 text-gray-500 '><span className='text-xs mb-2 text-gray-500'>By proceeding,you agree to the </span> <button className='font-semibold text-xs mb-2 hover:drop-shadow-xl text-orange-400 mx-1'> Terms and Conditions </button> and <button className='font-semibold hover:drop-shadow-xl text-xs mb-2  text-orange-400 mx-1'> Privacy Policy</button></p>
    </div>
  
    <div className='w-full'><p className='text-xs mb-2 text-gray-500 font-semibold'>Already have a Trialshoppy ID?<button className='font-semibold hover:font-fontBold text-sm mb-2 text-orange-400'> Log In </button></p></div>
    <div className='flex flex-row justify-end mb-2'>
      <button className='text-sm mb-2 text-gray-700 mx-2 hover:font-semibold'> Help</button>
      <button className='text-sm mb-2 text-gray-700 mx-2 hover:font-semibold'>Privacy</button>
      <button className='text-sm mb-2 text-gray-700 mx-2 hover:font-semibold'>Terms</button>
    </div>
    </div>
    </div>
    </>
      
  
  )
}
 




import React from 'react'

export default function Login() {
  
  return (
    <>
     <div className='max-md:bg-cover w-100% h-100% flex bg-cover bg-center items-center justify'
    style={{
        backgroundImage: `url('/images/background1.png')`,
        backgroundSize: 'full',
        backgroundRepeat: 'no-repeat',
      }}>
    <div className='max-sm:mr-8 max-sm:ml-8 max-sm:mt-28 max-sm:mb-60 flex w-[500px] max-w-1/3 mx-auto h-3/4 bg-white flex-col my-12 mx-29 pl-4 pr-4 rounded-md'>
        <h1 className='flex mt-3 text-xl text-black font-bold pt-2 relative'>TRIALSHOPPY</h1>
     <div className='flex w-full flex-col max-w-[450px]  justify-between'>
    <div className='flex w-full flex-col mb-2'>
        <p className='flex text-xl font-semibold mb-4 my-2'>Log in</p>
 <p className='flex text-xs mb-2 text-gray-500'>continue to trialshoppy</p>
    </div>
   
  <div className='flex w-full flex-col'>
    <input
    type='email'
    placeholder='Email or Mobile number'
    className='w-full text-black py-1 border border-gray-700 rounded-md'/>
  </div>
  <div className='w-full flex items-center justify-end'>
    <div className='w-full flex justify-end'>
        <input type="radio" className='w-4 h-4 mr-2  mt-1' />
        <p className='text-sm font-medium whitespace-nowrap cursor-pointer'>Remember me</p>
    </div>
  </div>
  <div className='w-full flex flex-col my-1'>
    <button className='w-full text-white my-2 bg-orange-500  rounded-md p-1 text-center flex items-center justify-center'>Request OTP</button>
  </div>
  <div className='w-full flex items-center justify-center relative py-2 my-2'>
    <div className='w-full h-[1px] bg-gray-500'></div>
    <p className='text-xs absolute  bg-[#f5f5f5]'>or</p>
  </div>
  <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/google.png" className='flex h-6 mr-2' />
    Continue with Google</button>
    <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/apple.jfif" className='flex h-6 mr-2' />
    Continue with Apple</button>
    <button className='flex w-full text-black my-2  bg-white font-semi-bold border border-gray-700 rounded-md p-1 text-center items-center justify-center '>
   <img src="/images/facebook.png" className='flex h-6 mr-2' />
    Continue with Facebook</button>
  </div>
  
 
 
  
    <div className='w-full'><p className='text-xs mb-2 text-gray-500'>New to Trialshoppy? <span className='font-semibold text-sm mb-2 cursor-pointer text-orange-400'>Sign Up</span></p></div>
    <div className='flex flex-row justify-end'>
      <button className='text-xs mb-2 font-semibold text-gray-500 mx-2'> Help</button>
      <button className='text-xs mb-2 font-semibold text-gray-500 mx-2'>Privacy</button>
      <button className='text-xs mb-2 font-semibold text-gray-500 mx-2'>Terms</button>
    </div>
    </div>

    </div>
     {/* <div>
      <div className="flex justify-center my-48">
        <div className="container1 bg-green-600 h-64 w-40 mx-1 my-1">container1</div>
        <div className="container2">
            <div className="d1 bg-green-700 h-20 w-40 mx-1 my-1"></div>

            <div className="d flex" >
                <div className="d11 bg-yellow-400 w-20 h-20 mx-1 my-1"></div>
                <div className="d11 bg-red-600 w-20 h-20 mx-1 my-1"></div>
            </div>
            <div className="d flex" >
                
                <div className="d11 bg-red-600 w-20 h-20 mx-1 my-1"></div>
                <div className="d11 bg-yellow-600 w-20 h-20 mx-1 my-1"></div>
            </div>
        </div>
        <div className="container3 flex flex-col ">
            <div className="c1 bg-red-600  h-32 w-40 mx-1 my-1"></div>
            <div className="c2 bg-green-600  h-32 w-40 mx-1 my-1"></div>
        </div>
      </div>
    </div> */}
    {/* <div className="flex flex-col justify-center my-48 mx-96 bg-slate-500 w-80">
      <div className="upper w-80 h-10 bg-purple-800 mx-1 my-1">header</div>
      <div className="middle flex flex-row">
        <div className="left h-64 w-40 bg-blue-700 mx-1 my-1"></div>
        <div className="right flex flex-col">
          <div className="u h-32 w-40 bg-blue-700 mx-1 my-1"></div>
          <div className="low flex flex-row">
          <div className="l h-32 w-16 bg-blue-700 mx-1 my-1"></div>
          <div className="r h-32 w-16 bg-blue-700 mx-1 my-1"></div>
          </div>
        </div>
      </div>
      <div className="bottom upper w-80 h-10 bg-purple-800 mx-1 my-1">footer</div>
    </div> */}
  
      {/* <div className="container flex justify-center items-center bg-slate-300 h-screen ">
<div className="left flex flex-col mt-4">
  <div className="f font-bold text-blue-700 text-4xl my-2">facebook</div>
  <div className="r font-semibold text-black text-4xl my-1">Recent logins</div>
  <div className="c font-normal text-gray-700 text-xl">Click your picture or add an account.</div>
  <div className="im flex flex-row space-x-3">
  <img src="https://scontent.fpat2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=db1b99&amp;_nc_ohc=yA87YnT4NJQAX_k1YbI&amp;_nc_ht=scontent.fpat2-3.fna&amp;oh=00_AfCOHkVKOjXJGO_6zcZTFZuBypqZx466d_2UEOweoSe_wg&amp;oe=65798DB8" alt="" className="im  w-28 h-28 rounded-md" />
  <img src="https://scontent.fpat2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=db1b99&amp;_nc_ohc=yA87YnT4NJQAX_k1YbI&amp;_nc_ht=scontent.fpat2-3.fna&amp;oh=00_AfCOHkVKOjXJGO_6zcZTFZuBypqZx466d_2UEOweoSe_wg&amp;oe=65798DB8" alt="" className="im  w-28 h-28 rounded-md" />
  <img src="https://scontent.fpat2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=db1b99&amp;_nc_ohc=yA87YnT4NJQAX_k1YbI&amp;_nc_ht=scontent.fpat2-3.fna&amp;oh=00_AfCOHkVKOjXJGO_6zcZTFZuBypqZx466d_2UEOweoSe_wg&amp;oe=65798DB8" alt="" className="im  w-28 h-28 rounded-md" />
</div>
</div>
<div className="right h-80  mt-16  bg-white w-80 justify-center rounded-lg">
  <input className="h-10 border border-gray-400 w-72 rounded-md space-x-1 p-2 mx-4 my-2 mt-4 hover:cursor-pointer active:border-blue-600" type='text' placeholder='Email address or phone number'/>
  <input className="h-10 border border-gray-400 w-72 rounded-md space-x-1 p-2 mx-4 my-2 hover:cursor-pointer active:border-blue-600" type='text' placeholder='Password'/>
  <button className='h-10 bg-blue-600 w-72 rounded-md space-x-1 mx-4 my-2 text-white  font-fontMedium p-2 cursor-pointer hover:border-blue-600'>Log in</button>
  <div className="s font-normal text-blue-600 text-sm justify-center text-center my-2 hover:underline">Forgotten password?</div>
  <hr className='w-72 justify-center  my-2 bg-slate-300'/>
  <button className='h-10 bg-green-500 w-56 mx-12 rounded-md space-x-1 mt-3 my-2 text-white  font-fontMedium p-2 cursor-pointer hover:bg-green-700'>Create new account</button>
  <div className="s -mb-44 text-xs text-center"><span className='text-black font-bold text-xs mx-1'> Create a Page</span>for a celebrity, brand or business.</div>
  </div>*/}
      {/* </div> */}
      </>
  
  )
}
 

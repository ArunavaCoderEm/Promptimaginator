import React from 'react'

export default function Home():React.ReactNode {
  return (
    <>
    <div className='w-full h-screen grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='flex flex-col justify-center h-[70vh] m-auto w-full'>
            <img src="./hpimg.png" alt="imgface" className='shaa sm:scale-100 lg:scale-125' />
        </div>
        <div className='flex flex-col justify-center h-[70vh] m-auto w-full'>
            <h1 className='text-4xl my-10 flex flex-col justify-center font-extrabold text-center mt-10 bg-clip-text bg-gradient-to-b from-gray-50 to-pink-800 text-transparent'>WELCOME TO PROMPTIMAGER</h1>  
            <form className="p-2 mx-auto">
                <input className='w-80 text-lg font-thin h-16 rounded-lg backdrop-blur-sm bg-white/10 border-gray-400 placeholder:text-pink-600 focus:border-none focus:outline-none text-center text-pink-700' required placeholder='Enter Image Prompt Here ...'/> 
                <button className='w-24 my-10 m-auto mx-3 h-16 p-2 rounded-md font-semibold text-white bg-pink-500 hover:scale-95 hover:bg-pink-700 transition-all duration-300'>Generate</button>
            </form>
        </div>
    </div>
    </>
  )
}

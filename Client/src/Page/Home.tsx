import React, { useState } from 'react';
import Imgcard from '../Components/Imgcard';
import axios from 'axios';

export default function Home():React.ReactNode {
  const [img, setimg] = useState<string[]>([]);
  const [inp, setinp] = useState<string>("");

  const submithandle = async (e: any) => {
    e.preventDefault();
    window.scrollTo(0, 600);
    const data = {
      prompt: inp,
    };
    try {
      const docs = await axios.post('http://localhost:8188/img/getimg', data);
      setimg(docs.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full my-10 h-screen grid lg:grid-cols-2 sm:grid-cols-1">    
          <img
            src="./hpimg.png"
            alt="imgface"
            className="shaa my-auto opacity-110 sm:scale-100 lg:scale-125"
          />
        <div className="flex flex-col my-10 justify-center h-[70vh] m-auto w-full">
          <h1 className="text-4xl my-10 flex flex-col justify-center font-extrabold text-center mt-10 bg-clip-text bg-gradient-to-b from-gray-50 to-pink-800 text-transparent">
            WELCOME TO PROMPTIMAGER
          </h1>
          <form className="p-2 mx-auto flex flex-col lg:flex-row gap-4" onSubmit={submithandle}>
            <input
              onChange={(e: any) => {
                setinp(e.target.value);
              }}
              value={inp}
              className="w-full max-w-md text-lg font-thin h-16 rounded-lg backdrop-blur-sm bg-white/10 border-gray-400 placeholder:text-pink-600 focus:border-none focus:outline-none text-center text-pink-700"
              required
              placeholder="Enter Image Prompt Here ..."
            />
            <button
              type="submit"
              className="w-24 h-16 mb-10 mx-auto px-2 rounded-md font-semibold text-white bg-pink-500 hover:scale-95 hover:bg-pink-700 transition-all duration-300"
            >
              Generate
            </button>
          </form>
        </div>
      </div>
      <div className="lg:mt-5 sm:mt-[250px]">
        <h1 className="text-4xl text-center text-white font-bold my-5">
          Your AI Image Result
        </h1>
      </div>
      <div className="grid mt-10 lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {img.map((item, index) => (
          <div key={index}>
            <Imgcard img={item} />
          </div>
        ))}
      </div>
    </>
  );
}

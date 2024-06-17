import React from 'react'

export default function Imgcard(props:any):React.ReactNode {
  return (
    <>
    <div>
      <img className="h-auto my-5 m-auto w-full rounded-md object-cover shaa px-10" src={props.img} alt="image description" />
    </div>
    </>
  )
}

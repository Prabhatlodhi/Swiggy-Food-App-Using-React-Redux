import React, { useEffect } from 'react'

const ProfileUsingFunction = ({name}) => {

  // useEffect(()=>{
  // const aa =   setInterval(()=>{
  //     console.log(" PFC useEffect")
  //   },1000)

  //   return (()=>{
  //     clearInterval(aa)
  //   })
  // },[])

  useEffect(() => {
    console.log("useeff cc 1 ")
  
    return () => {
      console.log("useeff cc 222 ")
    }
  }, [ ])
  

  return (
    <div>
      <h1>ProfileUsingFunction </h1>
      <p>{name} </p>
    </div>
  )
}

export default ProfileUsingFunction

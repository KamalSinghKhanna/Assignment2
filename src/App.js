import React, { useState } from 'react'



function App() {

const [userName, setUserName] = useState("");

const [data, setData] = useState({});
const [isSubmited, setIsSubmited] = useState(false);

const onChangeHandler = (e) => {
    setUserName(e.target.value);
}

const onSubmitHandler = (e) => {
  setIsSubmited(true);
  e.preventDefault();
  fetch(`https://api.github.com/users/${userName.split(' ').join('')}`)
  .then((result)=>{
    return result.json();
  }).then((value)=>{
    console.log(value)
    setData(value);
  })
}

  return (
 <>
  <div className='h-screen bg-slate-800'>
 
 <div className='flex  flex-col items-center '>
 <h1 className="text-center m-4 text-5xl text-gray-200">Github Search User App</h1>
   <form  className='mb-3 w-2/12' action="" id="myForm" autoComplete="off" onSubmit={onSubmitHandler}>
       <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
           <input type="text" id="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="search Username" required value={userName} onChange={onChangeHandler}/>
       </div>
       <div className="text-center">
           <button className="btn bg-red-400 my-2 ">
               Search User
           </button>
       </div>
   </form>
   </div>

    <div className={isSubmited ? "flex  justify-center block" : "hidden"}>
    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={data.avatar_url} alt="" />

    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">UserName - <span className="text-gray-700 text-base mb-4">{data.login}</span></h5>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Name - <span className="text-gray-700 text-base mb-4">{data.name}</span></h5>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Reposity - <span className="text-gray-700 text-base mb-4">{data.public_repos}</span></h5>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Gist - <span className="text-gray-700 text-base mb-4">{data.public_gists}</span></h5>
      <h5 className="text-gray-900 text-xl font-medium mb-2">Joined - <span className="text-gray-700 text-base mb-4">{data.created_at}</span></h5>
     
    </div>
  </div>
    </div>
    </div>
   

 </>
  
    
  )

}

export default App

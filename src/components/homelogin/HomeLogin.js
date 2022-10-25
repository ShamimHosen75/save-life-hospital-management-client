import React from 'react';
import Typewriter from 'typewriter-effect';
import './HomeLogin.css';
const HomeLogin = () => {
  return (
    <div className=' text-white grid lg:grid-cols-3 sm:grid-cols-1 mt-[150px] container mx-auto px-6 gap-4'>
<div className="card lg:max-w-lg home-login  shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-2xl"> <Typewriter 
  options={{
    strings: ['ARE YOU A DOCTOR ? '],
    autoStart: true,
    loop: true,
    
  }}
/>
</h2>
    <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary"> <i class="fa-regular fa-user mr-2"></i> Login Now</button>
    </div>
  </div>
</div>

<div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
   <img src='https://doccure-react.dreamguystech.com/template/892bd6d2d9e4cfd8d6d8b5daa4faabee.png' className='lg:max-w-lg'></img>
  </div>
</div>

<div className="card lg:max-w-lg home-login shadow-xl">
<div className="card-body">
    <h2 className="font-bold text-2xl"><Typewriter 
  options={{
    strings: [' ARE YOU A Patient ? '],
    autoStart: true,
    loop: true,
    
  }}
/>
</h2>
    <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary"> <i class="fa-regular fa-user mr-2"></i> Login Now</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default HomeLogin;
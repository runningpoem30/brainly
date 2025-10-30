import { useState } from "react";
import LoginButtons from "../buttons/LoginButtons";
function Header() {
 const[isOpen , setIsOpen] = useState(false);
   console.log(isOpen)
 
   //links should show up on desktop and hidden on mobile
   // first for phone 
   // need to define a function inside a button that toggles setIsOpen !
   // if setIsOpen then set it to false and dont show the links , 
   // if it is false 
   return (
    <div>
   <div className="sm:px-6 lg:px-8 ">
     <div className="flex   h-16 lg:space-x-40">
       

       <h1 className="text-2xl lg:text-5xl font-bold text-[#797DFF] ml-[100px] font-light ">
         lynkr
       </h1>
       
 
       <button className="block 2xl:hidden lg:hidden md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
       {isOpen?  <nav className="md:flex flex-col lg:space-x-50">
         <div><a href="#" className="text-gray-700  ">Home</a></div>
         <div> <a href="#" className="text-gray-700 ">Features</a></div>
          <div> <a href="#" className="text-gray-700 ">Download Extension</a></div>
        <div><a href="#" className="text-gray-700 ">How it Works</a></div>
        <LoginButtons/>
       </nav> : <h2></h2>}
  <div className="hidden lg:flex space-x-60 lg:text-xl "> 
    <nav className="hidden lg:flex justify-center space-x-8 lg:space-x-30 mt-[20px] text-white">
         <a href="#" className="">home</a>
         <a href="#" className="">features</a>
         <a href="#" className="">download extension</a>
         <a href="#" className="">how it works</a>
       </nav>
       <LoginButtons/>
</div>
      
      

     </div>
   </div>
 </div>
 
   )
}

export default Header

import Header from '../components/Header'
import GetStartedButton from "../buttons/GetStartedButton"
import { BackgroundBeams } from '../components/ui/background-beams'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
function LandingPage() {


 
  return (
   <body className="bg-black">
    <BackgroundBeams>hi there</BackgroundBeams>
    <div className="mt-[50px]">
        <Header/> 
    </div>

  <div className="flex flex-col text-white text-center justify-center lg:mt-[250px] mt-[150px] text-5xl lg:text-8xl font-light">
  <p>
    Your second <span className="text-[#797DFF]">brain</span> -
  </p>
  <p>powered by AI</p>
</div>
<div className="text-white text-center lg:text-3xl text-lg lg:mt-[130px] mt-[80px] px-4">
  Lynkr lets you collect links, tweets and 
  <span className="text-[#797DFF]"> ideas </span>
  in one place and turn them into knowledge you can query.
</div>

<div className="flex justify-center lg:mt-[60px]">
  <GetStartedButton/>
</div>

<div className="flex text-white lg:mt-[280px] justify-center lg:text-5xl">
  Tired of losing links , tweets , <br></br>images , and ideas across <br></br> chats , bookmarks and tabs ?
</div>
<div className="text-white">
  Lynkr organizes everything you save in one place — and makes it instantly searchable with AI.
</div>
 
<div>
<CanvasRevealEffect containerClassName='bg-black'>hi there</CanvasRevealEffect>
</div>


    
    
  </body>

  )
}
export default LandingPage

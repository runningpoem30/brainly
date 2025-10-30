import Header from '../components/landing/Header'
import GetStartedButton from "../buttons/GetStartedButton"
import { BackgroundBeams } from '../components/ui/background-beams'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import { GoogleGeminiEffect } from '../components/ui/google-gemini-effect'
import LandingSection from '../components/landing/landingSection'
import { CanvasRevealEffectDemo3 } from '../components/landing/landingTest'
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

    <CanvasRevealEffectDemo3></CanvasRevealEffectDemo3>
  </body>

  )
}
export default LandingPage

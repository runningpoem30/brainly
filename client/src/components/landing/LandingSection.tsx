import React from 'react'
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect'
function LandingSection() {
  return (
    <div>
      <CanvasRevealEffect containerClassName='bg-black'>
        <div className="flex text-white lg:mt-[280px] justify-center lg:text-5xl">
  Tired of losing links , tweets , <br></br>images , and ideas across <br></br> chats , bookmarks and tabs ?
</div>
  <div className="text-white text-center lg:text-2xl lg:mt-[50px]">
  Lynkr organizes everything you save in one place — and makes it instantly searchable with AI.
  </div>
  
      </CanvasRevealEffect>

    </div>
  )
}

export default LandingSection

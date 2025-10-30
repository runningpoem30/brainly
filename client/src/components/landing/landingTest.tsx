"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="h-[40rem] flex flex-col items-center justify-center bg-black w-full relative overflow-hidden">
      
      {/* Text container */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative text-center px-6 py-4"
      >
       
        <div>
         <p className="md:text-5xl text-2xl font-medium text-white relative z-20 max-w-2xl mx-auto">
          Tired of losing links, tweets, <br /> images, and ideas across <br /> chats, bookmarks, and tabs?
        </p>
        <p className="md:text-3xl text-2xl font-medium text-white relative z-20 max-w-2xl mx-auto">  Lynkr organizes everything you save in one place — and makes it instantly searchable with AI.</p>
        </div>
      

        {/* Canvas Reveal only around text */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full  absolute inset-0 z-10"
            >
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                opacities={[0.2, 0.4, 0.6, 0.8, 1]}
                dotSize={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Optional soft fade mask */}
        <div className="absolute inset-0 [mask-image:radial-gradient(250px_at_center,white,transparent)] bg-black/50" />
      </div>
    </div>
  );
}
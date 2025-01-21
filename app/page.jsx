'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TextLoop from "react-text-transition";

const TEXTS = ['React app.', 'Next.js app.', 'Vue.js app.', 'Angular app.', 'Svelte app.', 'Ember.js app.', 'Bootstrap app.'];

const animations = [
  'animate-1',
  'animate-2',
  'animate-3',
  'animate-4',
  'animate-5',
  'animate-6'
];

const animationCode = [
  "@keyframes animate1 { to { opacity: 0; transform: translateY(-20px); filter: blur(10px) sepia(1) hue-rotate(180deg) saturate(2); } from { opacity: 1; transform: translateY(0); filter: blur(0) sepia(0) hue-rotate(0deg) saturate(1); }}",
  'code-2',
  'code-3',
  'code-4',
  'code-5',
  'code-6'
];

export default function Home() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  const [copied, setCopied] = useState(false);

  const handleClick = (index) => {
    navigator.clipboard.writeText(animationCode[index])
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Clipboard copy failed", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 w-full cursor-crosshair">
      <div className="min-h-screen flex flex-col w-full"
        style={{
          background: 'radial-gradient(at 90% 14%, rgba(16, 110, 232, 0.35) 0px, transparent 50%), radial-gradient(at 82% 69%, rgba(26, 10, 83, 0.35) 0px, transparent 50%), radial-gradient(at 59% 5%, rgba(181, 26, 0, 0.35) 0px, transparent 50%), #001524'
        }}>
        <h1 className="text-white text-3xl font-bold mt-10 ml-10 animate-0">Modern CSS Animations <a href="https://millerding.com" target="_blank"><button role="link" className="relative text-lg text-slate-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-slate-200 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">by Miller Ding</button></a></h1>
        <h1 className="text-white text-xl font-normal mt-2 ml-10 animate-0 max-w-[45%]">A collection of modern, smooth, and simple to implement <span className="font-semibold">CSS animations</span> for your next&nbsp;
          <TextLoop inline="true">{TEXTS[index]}</TextLoop> No JS required, just paste it into your .css file.
          <br />
          <a href="https://www.w3schools.com/css/css3_animations.asp" target='_blank' className="text-slate-400 font-semibold text-lg hover:underline underline-offset-4">
            Using keyframe animations in CSS
          </a>
        </h1>
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl font-bold mt-10 animate-0-staggered">
            Click to Copy
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-8 text-white font-semibold sm:text-xl md:text-3xl lg:text-4xl animate-0-staggered2">
            {animations.map((animation, index) => (
              <motion.div
                key={index}
                className="cursor-pointer w-64 h-48 flex items-center justify-center bg-white/5 backdrop-blur-g rounded-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => handleClick(index)}
              >
                <span className={animation}>{animation}</span>
              </motion.div>
            ))}
            {copied && (
              <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-md shadow-lg">
                <span>Copied to clipboard!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

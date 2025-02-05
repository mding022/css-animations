'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TextLoop from "react-text-transition";

const TEXTS = ['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Ember.js', 'Bootstrap'];
const COLORS = ['text-cyan-300', "text-[#fdf5e6]", "text-green-300", 'text-red-300', 'text-orange-300', 'text-orange-700', 'text-indigo-300']

const animations = [
  'animate-1',
  'animate-2',
  'animate-3',
  'animate-4',
  'animate-5',
  'animate-6'
];

const animationCode = [
  "@keyframes animate1 { from { opacity: 0; transform: translateY(-20px); filter: blur(10px) sepia(1) hue-rotate(180deg) saturate(2); } to { opacity: 1; transform: translateY(0); filter: blur(0) sepia(0) hue-rotate(0deg) saturate(1); }}",
  '@keyframes animate2 { from { opacity: 0; transform: scale(0.9); filter: brightness(0.5); } to { opacity: 1; transform: scale(1); filter: brightness(1); }}',
  '@keyframes animate3 { from { opacity: 0; transform: scaleY(0.8); filter: contrast(0.5); } to { opacity: 1; transform: scaleY(1); filter: contrast(1); }}',
  '@keyframes animate4 { from { opacity: 0; transform: translateX(100px); filter: grayscale(100%) blur(5px); } 50% {opacity: 1; transform: translateX(0); filter: grayscale(0) blur(0); }}',
  '@keyframes animate5 { from { opacity: 0; transform: scale(0.7), translateY(-10px); filter: blur(30px); } 50% { opacity: 1; transform: scale(1), translateY(0px); filter: blur(0); }}',
  '@keyframes animate6 { from { opacity: 0; transform: scale(1.1); filter: sepia(1) saturate(0.5) hue-rotate(20deg); } 50% { opacity: 1; transform: scale(1); filter: sepia(0) saturate(1) hue-rotate(0deg); }}'
];

export default function Home() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500,
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
    <main className="flex min-h-screen flex-col items-center justify-between p-0 w-full">
      <div className="min-h-screen flex flex-col w-full"
        style={{
          background: 'radial-gradient(at 90% 14%, rgba(16, 110, 232, 0.35) 0px, transparent 50%), radial-gradient(at 82% 69%, rgba(26, 10, 83, 0.35) 0px, transparent 50%), radial-gradient(at 59% 5%, rgba(181, 26, 0, 0.35) 0px, transparent 50%), #001524'
        }}>
        <h1 className="text-white text-3xl font-bold mt-10 ml-10 animate-0">Modern CSS Animations <a href="https://millerding.com" target="_blank"><button role="link" className="relative text-lg text-slate-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-slate-200 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">by @mding022</button></a></h1>
        <h1 className="text-white text-xl font-normal mt-2 ml-10 animate-0 max-w-[50%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[45%]">A collection of modern, smooth, and simple to implement <span className="font-semibold">CSS animations</span> for your next&nbsp;
          <TextLoop inline="true" className={`${COLORS[index % COLORS.length]}`}><span className="font-extrabold">{TEXTS[index % TEXTS.length]}</span></TextLoop>&nbsp;app. No JS required, just paste it into your .css file.
        </h1>
        <a href="https://www.w3schools.com/css/css3_animations.asp" target='_blank' className="text-slate-400 ml-10 animate-0 font-semibold text-lg">
          <button role="link" className="relative text-lg text-slate-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-slate-300 after:opacity-0 after:transition after:duration-150   after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">
            Using keyframe animations in CSS
          </button>
        </a>
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
              <div className="text-xl fixed flex items-center justify-center top-10 right-10 transform p-1.5 bg-green-500 text-white rounded-md drop-shadow-2xl shadow-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z"
                    fill="currentColor"
                  />
                </svg>
                <span>&nbsp;Copied to clipboard!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

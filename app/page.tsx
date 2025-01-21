'use client'

const animations = [
  'animate-1',
  'animate-2',
  'animate-3',
  'animate-4',
  'animate-5',
  'animate-6'
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 w-full">
      <div className="h-screen flex flex-col w-full"
        style={{
          background: 'radial-gradient(at 90% 14%, rgba(16, 110, 232, 0.35) 0px, transparent 50%), radial-gradient(at 82% 69%, rgba(26, 10, 83, 0.35) 0px, transparent 50%), radial-gradient(at 59% 5%, rgba(181, 26, 0, 0.35) 0px, transparent 50%), #001524'
        }}>        
        <h1 className="text-white text-3xl font-extrabold mt-10 ml-10 animate-0">Modern CSS Animations</h1>
        <h1 className="text-white text-xl font-normal mt-2 ml-10 animate-0 max-w-[45%]">A collection of modern, smooth, and simple to implement <span className="font-semibold">CSS animations</span> for your next web app. No JS required, just paste it into your .css file.</h1>
        <a href="#">
          <h1 className="text-white text-xl font-semibold absolute right-10 top-10 hover:underline underline-offset-8">Help</h1>
        </a>
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl font-bold mt-10 animate-0-staggered">Click any to copy.</h1>
          <div className="grid grid-cols-3 gap-8 mt-8 text-white font-black text-xl">
            {animations.map((animation, index) => (
              <div key={index} className="w-64 h-48 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-md">
                <span className={animation}>{animation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

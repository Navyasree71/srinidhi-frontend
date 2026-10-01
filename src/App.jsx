import { useState } from 'react'

export default function App(){
  const [menu,setMenu]=useState(false)
  return (
    <div className="bg-[#F6F1EB] text-[#1A1A1A]">
      {/* NAV */}
      <nav className="absolute top-0 w-full z-20 flex justify-between items-center px-6 md:px-12 py-6 text-white">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 border border-white/60 flex items-center justify-center font-serif text-xl">S</div>
          <div className="leading-tight"><p className="text-sm">Srinidhi</p><p className="font-serif italic opacity-80">Constructions</p></div>
        </div>
        <button onClick={()=>setMenu(!menu)} className="w-10 h-10 border border-white/50 flex items-center justify-center">☰</button>
      </nav>

      {/* HERO */}
      <div className="relative h-[100vh] w-full">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-20 pb-20">
          <p className="text-[10px] tracking-[0.3em] text-white/70 mb-4">— ARCHITECTURE • DESIGN • CONSTRUCTION</p>
          <h1 className="text-white text-5xl md:text-7xl leading-[0.95] max-w-2xl">Spaces designed<br/>to inspire.<br/><span className="italic font-light text-white/80 text-4xl md:text-5xl">Built to last.</span></h1>
          <p className="text-white/70 mt-6 max-w-md text-sm leading-relaxed">Srinidhi Constructions brings thoughtful planning and considered craft to the places where life unfolds.</p>
          <div className="mt-8 flex gap-6 items-center">
            <button className="bg-[#F6F1EB] px-8 py-4 text-sm flex items-center gap-4">Explore our projects <span>→</span></button>
            <button className="text-white text-sm border-b border-white/50 pb-1">Start your project ↗</button>
          </div>
          <div className="mt-20 flex justify-between text-[10px] tracking-widest text-white/60"><span>SCROLL TO DISCOVER ↓</span><span>BENGALURU</span></div>
        </div>
      </div>

      {/* INTRO */}
      <div className="px-6 md:px-20 py-24 md:py-36 max-w-6xl">
        <p className="text-[10px] tracking-[0.3em] opacity-60 mb-6">— A MORE CONSIDERED WAY TO BUILD</p>
        <h2 className="text-5xl md:text-6xl leading-[1.05]">Good spaces<br/>make<br/>room for <span className="italic text-[#9C6B4A]">living.</span></h2>
        <p className="mt-8 max-w-xl text-sm leading-7 opacity-60">We create homes and spaces that feel inevitable: well considered, beautifully made, and designed for the life within. From the first conversation to the final finish, we believe in clear thinking and care at every scale.</p>
        <button className="mt-10 text-sm border-b border-[#9C6B4A] pb-2">Meet Srinidhi ↗</button>
      </div>

      {/* WORK */}
      <div className="px-6 md:px-20 pb-20">
        <p className="text-[10px] tracking-[0.3em] opacity-60 mb-6">— SELECTED WORK</p>
        <h2 className="text-5xl md:text-6xl">Built with<br/><span className="italic text-[#9C6B4A]">intention.</span></h2>
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div>
            <div className="relative"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" className="w-full aspect-[4/3] object-cover"/><span className="absolute top-4 left-4 bg-[#F6F1EB] px-3 py-2 text-xs">01</span></div>
            <p className="mt-6 text-[10px] tracking-widest text-[#9C6B4A]">RESIDENTIAL</p><h3 className="text-2xl mt-2">The Courtyard House</h3><p className="text-[10px] tracking-widest opacity-60 mt-1">ILLUSTRATIVE CONCEPT — Whitefield, Bengaluru</p>
          </div>
          <div className="md:mt-20">
            <div className="relative"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" className="w-full aspect-[4/3] object-cover"/><span className="absolute top-4 left-4 bg-[#F6F1EB] px-3 py-2 text-xs">02</span></div>
            <p className="mt-6 text-[10px] tracking-widest text-[#9C6B4A]">COMMERCIAL</p><h3 className="text-2xl mt-2">The Studio Office</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
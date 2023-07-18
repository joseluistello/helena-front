import React from "react"
import Link from "next/link"

const HeroSection = () => {
return (

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
  
<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
  Encuentra el apoyo que necesitas para crecer.</h1> 


  <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
Estaremos contigo en todo momento, incluso en los momentos más difíciles de la vida. Empieza hoy y obtén el apoyo que necesitas, cuando más lo necesitas.
  </p>


  <div className="mt-10 flex justify-center gap-x-6">
    <a className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300" target="_blank" href="https://t.me/helena_gpt_bot">Da click aquí</a>
    <a className="group inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 focus:outline-none focus-visible:outline-blue-600 focus-visible:ring-slate-300 active:bg-slate-100 active:text-slate-600" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      ><svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"><path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path></svg><span className="ml-3">Ve nuestra demo</span></a>
  </div>


</div>
)
}

export default HeroSection
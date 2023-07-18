import React from "react"
import Link from "next/link"

const HeroSection = () => {
return (
<section className="text-gray-600 body-font bg-red-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://cdni.iconscout.com/illustration/premium/thumb/heart-treatment-and-healing-5357605-4493592.png"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Encuentra el apoyo que necesitas para crecer personalmente</h1>
      <p className="mb-8 leading-relaxed">Helena te ofrece un apoyo integral para el crecimiento personal, respaldado por métodos psicológicos comprobados, para ayudarte a encontrar el equilibrio incluso en los momentos más desafiantes de la vida.</p>
      <div className="flex justify-center">
        <a href="https://t.me/helena_gpt_bot" target="_blank" className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">Chatea con Helena</a>
      </div>
    </div>
  </div>
</section>
)
}

export default HeroSection
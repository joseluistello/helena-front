import React from "react"
import Link from "next/link"

const HeaderSection = () => {
return (
<header className="text-black-600 body-font bg-red-100">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-fuchsia-800 rounded-full" viewBox="0 0 24 24">
        <path d="7l10 5 10-5-10-5zM2"></path>
      </svg>
      <span className="ml-3 text-xl">Helena</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Producto</a>
      <a className="mr-5 hover:text-gray-900">Helena</a>
      <a className="mr-5 hover:text-gray-900">Nosotros</a>
    </nav>
  </div>
</header>
)   

}


export default HeaderSection
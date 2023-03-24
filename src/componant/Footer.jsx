import React from 'react'

const Footer = () => {
  return (
    <footer className="container-fluid mx-auto p-6 flex flex-col-reverse md:flex-row items-center justify-between bg-slate-600 opacity-70 w-full text-white">
        <p>Built with 💖 Mariam</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About us
          </a>
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>
          |
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contacs
          </a>
        </div>
      </footer>
  )
}

export default Footer
import React from 'react'

const Main = () => {
  return (
    <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-4xl md:text-2xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8">
          The coding club
        </h1>
        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-60 w-fit mx-auto mb-8 rounded-full">
          942,243 members
        </div>

        <form
          action="https://www.getrevue.co/profile/sheblmariam4/add_subscriber"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder=" email address..."
              type="email"
              name="member[email]"
              className="text-lg md:text-2xl placeholder:text-gray-900 placeholder:italic py-4 px-6 md:px-10 lg:py-4 lg:px-12 bg-white bg-opacity-20 focus:bg-opacity-25 duration-150 outline-none focus:pl-4 focus:text-gray-600 rounded-full md:rounded-tr-none md:rounded-br-none md-4 md:mb-0"
            />
            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              className="bg-slate-900 text-white rounded-full md:rounded-tl-none 
            md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12  cursor-pointer hover:opacity-90 duration-75"
            />
          </div>

   
          <div className="opacity-75 italic">
            By subscribing, you agree with us
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              className="hover:opacity-80 duration-150"
            >
              Terms of Service
            </a>
            and
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              className="hover:opacity-80 duration-150"
            >
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>
  )
}

export default Main
import { useState } from "react";
// import lg from '../img/layer2.svg';
import mm from '../img/mm.svg';
// import logo from '../img/logo.svg';

const Navbar = () => {

  const [linesClicked, setLinesClicked] = useState(false);
  const [tab, setTab] = useState("Home"); //Home, About, Experience, Skills, Projects, Contact

  // const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = (cn) => {
        setTab(cn)
        document.getElementById(cn).scrollIntoView({ behavior: "smooth" })
    }

  return (
    <nav class="bg-gray-800  sticky top-0">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              {
                linesClicked ? 
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={() => setLinesClicked(false)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> :
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={() => setLinesClicked(true)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              }
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <button class="flex flex-shrink-0 items-center" onClick={() => handleClickNav("Home")}>
              <img class="block h-8 w-auto lg:hidden" src={mm} alt="Your Company"/>
              <img class="hidden h-8 w-auto lg:block" src={mm} alt="Your Company"/>
            </button>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <button class={"hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " + (tab === "About" ? 'bg-gray-900 text-white' : 'text-gray-300')} onClick={() => handleClickNav("About")} smooth={true} duration={1000}>About</button>

                <button class={"hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " + (tab === "Skills" ? 'bg-gray-900 text-white' : 'text-gray-300')} onClick={() => handleClickNav("Skills")}>Skills</button>

                <button class={"hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " + (tab === "Projects" ? 'bg-gray-900 text-white' : 'text-gray-300')} onClick={() => handleClickNav("Projects")}>Projects</button>

                <button class={"hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " + (tab === "Contact" ? 'bg-gray-900 text-white' : 'text-gray-300')} onClick={() => handleClickNav("Contact")}>Contact</button>
              </div>
            </div>
          </div>

          {/* <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> *
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              </button>
          </div> */}

        </div>
      </div>

      {
        linesClicked && <div>
          <div class="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <button class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</button>

            <button class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</button>

            <button class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>

            <button class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</button>
          </div>
        </div>
      }
    </nav>
    )
}

export default Navbar;
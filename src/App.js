import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from "./components/ProjectCard";

import HomePage from "./components/Page1Home";
import AboutPage from "./components/Page2About";
import ContactPage from "./components/Page5Contact";

import pic from './img/P1010009.JPG';

const commonStyles = 'min-h-[200px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400';

function App() {
  return (
    <div className=''>
    <Navbar/>
      <div className='fixed top-16 snap-y snap-mandatory height-w-nav w-screen overflow-scroll overflow-x-hidden bg-amber-900'>

        {/******************************************* 
                          1: Home
        ********************************************/}

        <div className='spacer layer1 snap-start bg-amber-200 w-full h-full flex items-center justify-center text-8xl' id="Home">
          <HomePage/>
        </div>
        
        <div class="custom-shape-divider-bottom-1663835133">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>

        {/******************************************* 
                          2: About
        ********************************************/}

        <div className='snap-start about_page w-full h-full flex items-center justify-center text-8xl shapedividers_com-7647 z-[-1]' id="About">
          <AboutPage/>
        </div>


        <div className='spacer layer2 snap-start bg-cyan-200 w-full h-full flex items-center justify-center text-8xl' id="Experience">
          <div className='border border-red-300 py-5 h-full'>
            <div className='h-full bg-blue-100 px-5 py-5 mx-5 border-dashed border border-blue-600 '>
              <div className='height-w-nav flex items-center justify-center text-8xl'>
                3
              </div>

              {/* <ProjectCard className="top-[-400px]" pic={pic} name="Prague"/> */}

            </div>
          </div>
        </div>

        {/******************************************* 
                          4: Projects
        ********************************************/}


        <div className='snap-start fuchsia w-full h-full' id="Skills">
          {/* <div class="wrapper">
            <div class="one">{bx("One")}</div>
            <div class="two">{bx("Two")}</div>
            <div class="three">Three</div>
            <div class="four">{bx("Four")}</div>
            <div class="five">Five</div>
            <div class="six">Six</div>
          </div> */}

          <div className="flex justify-center items-center">
            <div className='grid sm:grid-cols-3 grid-cols-2 w-[900px] mt-10 gap-4'>
              <div className={`rounded-tl-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Prague"/>
              </div>
              <div className={`sm:rounded-[0px] rounded-tr-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Kim"/>
              </div>
              <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Cali"/>
              </div>
              <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Prague"/>
              </div>
              <div className={`sm:rounded-[0px] rounded-bl-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Prague"/>
              </div>
              <div className={`rounded-br-2xl ${commonStyles}`}>
                <ProjectCard pic={pic} name="Prague"/>
              </div>
            </div>
          </div>
        </div>

        {/******************************************* 
                          5: Contact
        ********************************************/}

        <div className='spacer layer2 snap-start bg-cyan-200 w-full h-full flex items-center justify-center' id="Contact">
          <ContactPage/>
        </div>



      </div>
    </div>
  );
}

export default App;

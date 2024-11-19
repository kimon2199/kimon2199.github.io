import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Navbar from "./components/Navbar";
// import useOnScreen from './components/UseOnScreen';

import HomePage from "./components/Page1Home";
import AboutPage from "./components/Page2About";
import SkillPage from "./components/Page3Skills";
import ProjectsPage from "./components/Page4Projects";
import ContactPage from "./components/Page5Contact";

function App() {
  // const useOnScreen = (ref) => {

  //   const [isIntersecting, setIntersecting] = useState(false)

  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIntersecting(entry.isIntersecting)
  //   )

  //   useEffect(() => {
  //     observer.observe(ref.current)
  //     // Remove the observer as soon as the component is unmounted
  //     return () => { observer.disconnect() }
  //   }, [])

  //   return isIntersecting
  // }

  const [tab, setTab] = useState("Home"); //Home, About, Experience, Skills, Projects, Contact

  return (
    <div className="">
      <Helmet>
        <title>kimon.</title>
        <link rel="icon" type="image/png" href="k.png" sizes="16x16" />
      </Helmet>
      <Navbar tab={tab} setTab={setTab} />
      <div className="fixed top-16 snap-y snap-mandatory height-w-nav w-screen overflow-scroll overflow-x-hidden bg-amber-900">
        {/******************************************* 
                          1: Home
        ********************************************/}

        <div
          className="spacer layer1 snap-start bg-[#00CC99] w-full h-full flex items-center justify-center text-8xl"
          id="Home"
        >
          <HomePage />
        </div>

        <div class="custom-shape-divider-bottom-1663835133">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        {/******************************************* 
                          2: About
        ********************************************/}

        {/* <div className='snap-start about_page w-full h-full flex items-center justify-center text-8xl shapedividers_com-7647 z-[-1]' id="About"> */}
        <div
          className="snap-start about_page w-full h-full flex items-center justify-center text-8xl z-[30]"
          id="About"
        >
          <AboutPage />
        </div>

        {/******************************************* 
                          3: Skills
        ********************************************/}

        <div
          className="layer2 spacer snap-start bg-cyan-200 w-[5px] h-full text-8xl"
          id="Skills"
        >
          <div class="custom-shape-divider-top-1667056953">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <SkillPage />
        </div>

        {/******************************************* 
                          4: Projects
        ********************************************/}

        <div
          className="spacer snap-start layer3 w-full h-full flex items-center justify-center"
          id="Projects"
        >
          <ProjectsPage />
        </div>

        {/******************************************* 
                          5: Contact
        ********************************************/}

        <div
          className="spacer layer4 snap-start bg-cyan-200 w-full h-full flex items-center justify-center"
          id="Contact"
        >
          <div class="custom-shape-divider-top-1667149805">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 892.25 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;

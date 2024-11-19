import causaly from "../img/page2-causaly.png";
import nokia from "../img/page2-nokia.png";
import accenture from "../img/page2-accenture.png";

const AboutPage = () => {
  return (
    <div className="py-[60px] h-full w-full px-2 md:px-20 flex justify-center items-center">
      <div className="glass h-full lg:h-[500px] flex flex-col items-center rounded-lg border shadow-md sm:flex-row sm:max-w-7xl">
        <div className="flex justify-center items-center p-4 leading-normal grid grid-rows-7 auto-rows-min">
          <h5 className="flex flex-row justify-center mb-2 mx-7 text-2xl font-bold tracking-tight text-gray-100 mono row-start-1 row-span-1">
            About Me.
          </h5>
          <h5 className="mb-2 mx-7 text-base sm:text-xl tracking-tight text-gray-300 dark:text-white mono row-start-2 row-span-2">
            Hello, I'm Kimon Softas, a Software Engineer based in Athens,
            Greece. I hold a BSc in Computer Science from the National &
            Kapodistrian University of Athens and currently work as a Back-End
            Engineer at Causaly, where I integrate Large Language Models into
            web applications. Previously, I worked at Accenture, focusing on
            secure API development and interned at Nokia.
          </h5>
          <div className="flex flex-row justify-center row-start-4 row-span-2 shrink">
            <div className="w-[200px] h-[200px] bottom-0 flex justify-center items-center">
              <img
                className="object-contain bottom-0 shrink"
                src={accenture}
                alt="00"
              />
            </div>
            <div className="w-[200px] h-[200px] bottom-0 flex justify-center items-center mx-5 p-3">
              <img className="object-contain bottom-0" src={causaly} alt="00" />
            </div>
            <div className="w-[200px] bottom-0 shrink flex justify-center items-center pt-5">
              <img className="object-contain bottom-0" src={nokia} alt="00" />
            </div>
          </div>
          <div className="flex flex-row justify-center row-start-6 row-span-1 pt-2">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sky-900 to-teal-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <a
                href={require("../assets/resume.pdf")}
                download="Kimon-Softas-CV.pdf"
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

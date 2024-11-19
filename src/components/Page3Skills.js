import Skill from "./Skill";
import cpp from "../img/logo-cpp.png";
import c from "../img/logo-c.png";
import cSharp from "../img/logo-c-sharp.png";
import python from "../img/logo-python.png";
import typescript from "../img/logo-ts.png";
import react from "../img/logo-react.png";
import node from "../img/logo-node.png";
import langChain from "../img/logo-langchain.png";
import tailwind from "../img/logo-tailwind.png";
import mysql from "../img/logo-mysql.png";
import docker from "../img/logo-docker.png";
import git from "../img/logo-git.png";
import gcp from "../img/logo-gcp.svg";

const SkillPage = () => {
  return (
    <div className="py-[60px] h-full w-full px-2 md:px-20 flex justify-center items-center">
      <div class="glass h-full lg:h-[500px] flex flex-col items-center rounded-lg border shadow-md sm:flex-row sm:max-w-7xl grid grid-rows-8 min-h-[400px]">
        <h5 className="flex flex-row justify-center text-2xl font-bold tracking-tight text-gray-100 mono row-start-1 row-span-1">
          My Skills.
        </h5>

        <div className="grid grid-cols-3 row-start-2 row-span-7">
          <div className="pl-2 sm:pl-5 sm:pr-2 col-start-1 col-span-1 lg:w-[300px]">
            <h5 class="flex flex-row justify-center mb-2 mx-7 text-xl font-bold tracking-tight text-gray-100 mono row-start-1 row-span-1">
              Languages.
            </h5>
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <Skill img={typescript} name={"Typescript"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={python} name={"Python"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={cpp} name={"C / C++"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={cSharp} name={"C#"} />
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 col-start-2 col-span-1 lg:w-[300px]">
            <h5 class="flex flex-row justify-center mb-2 mx-7 text-xl font-bold tracking-tight text-gray-100 mono row-start-1 row-span-1">
              Frameworks.
            </h5>
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <Skill img={node} name={"NodeJS"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={langChain} name={"LangChain"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={react} name={"React"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={tailwind} name={"Tailwind CSS"} />
                </li>
              </ul>
            </div>
          </div>

          <div className="pr-2 sm:pr-5 sm:pl-2 col-start-3 col-span-1 lg:w-[300px]">
            <h5 class="flex flex-row justify-center mb-2 mx-7 text-xl font-bold tracking-tight text-gray-100 mono row-start-1 row-span-1">
              Technologies.
            </h5>
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <Skill img={mysql} name={"MySQL"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={docker} name={"Docker"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={git} name={"Git"} />
                </li>
                <li class="py-3 sm:py-4">
                  <Skill img={gcp} name={"Google Cloud"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;

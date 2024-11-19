import ProjectCard from "../components/ProjectCard";
import servers from "../img/project-servers.jpg";
import syspro from "../img/project-syspro.jpg";
import swarm from "../img/project-swarm.png";
import scrum from "../img/project-scrum.png";
import cluster from "../img/project-cluster.png";
import yahoo from "../img/project-yahoo.png";

const commonStyles =
  "min-h-[200px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center";

const ProjectsPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid sm:grid-cols-3 grid-cols-2 w-[900px] gap-1 sm:gap-4 mb-10">
        <div className={`rounded-tl-2xl ${commonStyles}`}>
          <ProjectCard
            pic={cluster}
            name="ANN & Clustering"
            code={
              "https://github.com/kimon2199/SW-Development-for-Algorithmic-Problems"
            }
            demo={false}
            projType={"School Senior Project"}
            tech={"C++, Tensorflow"}
            description={
              "Implementation of Aproximate Nearest Neighbour & Clustering algorithms and result comparison between original & encoded data"
            }
          />
        </div>
        <div className={`sm:rounded-[0px] rounded-tr-2xl ${commonStyles}`}>
          <ProjectCard
            pic={swarm}
            name="OpenAI Swarm Marketing Agency"
            code={"https://github.com/kimon2199/openai-swarm-marketing-agency"}
            demo={false}
            projType={"Personal Project"}
            tech={"Python, Swarm"}
            description={
              "A multi-agent AI system that simulates a marketing agency workflow using OpenAI's Swarm framework."
            }
          />
        </div>
        <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
          <ProjectCard
            pic={yahoo}
            name="Financial Headline Analyzer"
            code={"https://github.com/kimon2199/socketGames"}
            demo={false}
            projType={"Personal Project"}
            tech={"Python, NLP, FinBERT, Gradio"}
            description={
              "A Gradio app for performing sentiment analysis on financial headlines using FinBERT."
            }
          />
        </div>
        <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
          <ProjectCard
            pic={syspro}
            name="Systems Programming"
            code={"https://github.com/kimon2199/sysPro-diseaseAggregator"}
            demo={false}
            projType={"School Project"}
            tech={"C++"}
            description={
              "A distributed system of multi-threaded processes that answers user prompts."
            }
          />
        </div>
        <div className={`sm:rounded-[0px] rounded-bl-2xl ${commonStyles}`}>
          <ProjectCard
            pic={servers}
            name="Server Logging App"
            code={"https://github.com/kimon2199/serverLogApp"}
            demo={"https://kimon2199.github.io/serverLogApp-Demo/"}
            projType={"Work Project"}
            tech={"React, NodeJS, Express, MySQL"}
            description={
              "A CRUD web application for logging info between servers."
            }
          />
        </div>
        <div className={`rounded-br-2xl ${commonStyles}`}>
          <ProjectCard
            pic={scrum}
            name="Scrum Web App"
            code={"https://github.com/kimon2199/Software-Technology"}
            demo={"https://kimon2199.github.io/scrumApp-Demo"}
            projType={"School Project"}
            tech={"React, Spring Boot, MySQL"}
            description={
              "A web platform for scrum team collaboration. Supports users, projects & issues."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

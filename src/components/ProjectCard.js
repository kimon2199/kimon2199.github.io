const ProjectCard = ({
  name,
  pic,
  demo,
  description,
  code,
  projType,
  tech,
}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div class="card">
      <ul class="ul">
        <li
          className={demo ? "ul-li-first-child" : "rounded-[6px]"}
          onClick={() => openInNewTab(code)}
        >
          View Code
        </li>
        {demo && (
          <li className="ul-li-last-child" onClick={() => openInNewTab(demo)}>
            Live Demo
          </li>
        )}
      </ul>
      <img className="object-cover rounded-[15px]" src={pic} alt="No pic" />
      <div class="con-text">
        <h2 className="">{name}</h2>
        <p>
          • {projType}
          <br />• {tech}
          <br />
          {description}
          {/* <button>See more</button> */}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

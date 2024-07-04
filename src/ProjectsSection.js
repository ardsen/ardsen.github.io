import Dot from "./Dot";
import ProjectButton from "./ProjectButton";


function ProjectsSection({ bg, count, setCount, p, b, h, setIsModalOpen, githubRepo }) {
  return (
    <section
      className="projects-section " id="section-1"
    >
      <div className="projects-section-container animation-opacity"
        id="section-1"
        style={{ backgroundImage: bg }}>
        <div className="project-left-side-container ">
          <div className="project-topic animation-l-r">
            <h3>{h}</h3>
          </div>
          <div className="project-p animation-opacity">
            <div className="project-p-overlay "></div>
            <p>
              {p}
            </p>
          </div>
          <div className="project-btn-container animation-opacity">
            {count === 1 && <button onClick={() => { setIsModalOpen(true) }}>About the App</button>}
            {(count === 2 || count === 3) && <a target="_blank" rel="noreferrer" href={githubRepo}><button>Github Repo</button></a>}
            <ProjectButton b={b}>{count === 4 ? "Go to GitHub" : "Go to Website"}</ProjectButton>
          </div>
        </div>
      </div>
      {/* <div className="project-image-container"></div> */}
      <div className="projects-dots">
        <Dot activeClass={count === 1 ? "active-dot" : ""} num={1} setCount={setCount} />
        <Dot activeClass={count === 2 ? "active-dot" : ""} num={2} setCount={setCount} />
        <Dot activeClass={count === 3 ? "active-dot" : ""} num={3} setCount={setCount} />
        <Dot activeClass={count === 4 ? "active-dot" : ""} num={4} setCount={setCount} />
      </div>
      <div className="timer-container">
        <div className="timer animation-timer"></div>
      </div>
      <div className="left-arrow-container" onClick={() => setCount(count - 1)}>
        <img src="/leftarrow.svg" alt="Left arrow" />
      </div>
      <div className="right-arrow-container" onClick={() => setCount(count + 1)}>
        <img src="/rightarrow.svg" alt="Left arrow" />
      </div>
    </section>
  );
}

export default ProjectsSection;

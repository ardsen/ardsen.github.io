import { useState } from "react";
import SkillItem from "./SkillItem";
import SkillInfo from "./SkillInfo";

function SkillsSection() {
  const [isInside, setIsInside] = useState(false);
  const [isHTMLOpen, setIsHTMLOpen] = useState(false)
  const [isJsOpen, setIsJsOpen] = useState(false)
  const [isReactOpen, setIsReactOpen] = useState(false)
  const [isCssOpen, setIsCssOpen] = useState(false)
  const [isNodejsOpen, setIsNodejsOpen] = useState(false)
  const [isMongodbOpen, setIsMongodbOpen] = useState(false)
  const [isPythonOpen, setIsPythonOpen] = useState(false)
  const [isDjangoOpen, setIsDjangoOpen] = useState(false)
  const [isSqlOpen, setIsSqlOpen] = useState(false)

  const skillH = (isHTMLOpen && "HTML") || (isJsOpen && "Javascript") || (isReactOpen && "React.js") || (isCssOpen && "CSS") || (isNodejsOpen && "Node.js") || (isMongodbOpen && "MongoDB") || (isPythonOpen && "Python") || (isDjangoOpen && "Django") || (isSqlOpen && "SQL") || "My Skills"

  const skillImg = (isHTMLOpen && "/htmllogo.png") || (isJsOpen && "/jslogo.png") || (isReactOpen && "/reactlogo.png") || (isCssOpen && "/csslogo.png") || (isNodejsOpen && "/nodejs.png") || (isMongodbOpen && "/mongodblogo.png") || (isPythonOpen && "/pythonlogo.png") || (isDjangoOpen && "/djangologo.png") || (isSqlOpen && "/sqllogo.png") || "/development.png"



  const skillP = (isHTMLOpen && "I have extensive experience with HTML, having used it to build and structure web pages for various projects. I am proficient in creating semantic, well-organized code, and I am familiar with the latest HTML5 features and best practices.") ||
    (isJsOpen && "I am proficient in JavaScript, having used it extensively to build a variety of projects. I am proficient in modern JavaScript (ES6+) and have experience with key concepts such as asynchronous programming, closures, and event handling. My expertise in JavaScript also extends to front-end development with React.js, enabling me to create dynamic and interactive web applications.") ||
    (isReactOpen && "I build most of my projects with React.js. I have extensive experience with React, utilizing it to build dynamic and interactive user interfaces for web applications. I am proficient in using React hooks and building reusable components.") ||
    (isCssOpen && "I am highly skilled in CSS, using it to create responsive and visually appealing web designs. I have a strong understanding of CSS3, including Flexbox, Grid, and animation techniques. I also have experience with Sass, Scss and Bootstrap.") ||
    (isNodejsOpen && "I am currently learning Node.js through courses on Udemy. Although I am still gaining experience, I am actively working on projects to enhance my skills in server-side development using Node.js, Express.js, MongoDB, and Mongoose.") ||
    (isMongodbOpen && "I am currently learning MongoDB through courses on Udemy. While I am still gaining experience, I am working on projects to improve my skills in using MongoDB for database management and developing applications that require efficient and scalable data storage solutions.") ||
    (isPythonOpen && "I have some experience with Python, having learned it through courses at Neos Academy and on Udemy. While I am not currently working with Python and don't have significant projects aside from those developed with Django, I am familiar with the basics and open to learning more as needed.") ||
    (isDjangoOpen && "I have learned Django through a course and have developed several applications, including blog applications. While I have less experience with Django compared to other technologies, I am open to learning more and expanding my skills in building web applications with Django.") ||
    (isSqlOpen && "I have learned some SQL through a course and have very limited experience with it. I have used SQL for basic database queries and management tasks, and I am open to learning more about it.") ||
    "During the recent year, I have been trying to improve myself in various technologies through the software expertise courses I took at Neos Academy and the courses I took on Udemy, as well as the projects I developed individually. For more information, you can hover over the icons."






  return (
    <section className="skills-section-container" id="section-2">
      <div className="skills-section-inner-container">
        <div
          className={`skill-orbit animation-rotation ${isInside && "paused"}`}
          onMouseEnter={() => setIsInside(true)}
          onMouseLeave={() => setIsInside(false)}
        >
          <div className="orbit-1">
            <div
              className={`item item-1 animation-rotation-individual ${isInside && "paused"
                }`}
            ></div>
            <div
              className={`item item-2 animation-rotation-individual ${isInside && "paused"
                }`}
            ></div>
            <SkillItem img="/htmllogo.png" alt="HTML logo" itemNum={1} isInside={isInside} setIsSkillOpen={setIsHTMLOpen} />
            <SkillItem img="/jslogo.png" alt="Javascript logo" itemNum={2} isInside={isInside} setIsSkillOpen={setIsJsOpen} />
            <SkillItem img="/reactlogo.png" alt="React logo" itemNum={3} isInside={isInside} setIsSkillOpen={setIsReactOpen} />
            <SkillItem img="/csslogo.png" alt="CSS logo" itemNum={4} isInside={isInside} setIsSkillOpen={setIsCssOpen} />

            <div className="orbit-2">
              <SkillItem img="/nodejs.png" alt="Nodejs logo" itemNum={5} isInside={isInside} setIsSkillOpen={setIsNodejsOpen} />
              <SkillItem img="/mongodblogo.png" alt="MongoDB logo" itemNum={6} isInside={isInside} setIsSkillOpen={setIsMongodbOpen} />

              <SkillItem img="/pythonlogo.png" alt="Python logo" itemNum={7} isInside={isInside} setIsSkillOpen={setIsPythonOpen} />
              <div className="orbit-3">
                <SkillItem img="/djangologo.png" alt="Django logo" itemNum={8} isInside={isInside} setIsSkillOpen={setIsDjangoOpen} />
                <SkillItem img="/sqllogo.png" alt="SQL logo" itemNum={9} isInside={isInside} setIsSkillOpen={setIsSqlOpen} />

              </div>
            </div>
          </div>
        </div>
        <SkillInfo img={skillImg} h={skillH} p={skillP} />
      </div>
    </section>
  );
}

export default SkillsSection;

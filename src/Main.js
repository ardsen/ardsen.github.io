import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutApp from "./AboutApp";
// import { clear } from "@testing-library/user-event/dist/clear";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);
  const firtsProjectTopic = "Korcha - A Browser Game";
  const firstProjectParagraph =
    "Korcha is an old-school turn-based browser game which I developed after I started learning React. It consists of around 100 components. The project was important for me to understand the basics of React, such as useState, useEffect hooks, props, reusable components, React Router, etc. Since it was developed right after I started learning React, it does not have proper state management and has a lot of prop drilling. As soon as I have time from my other projects, I plan to implement proper state management using useReducer and Context or Redux. However, this project was essential for me to understand the fundamentals.";
  const firstProjectLink = "https://korcha-game.vercel.app/";
  const secondProjectTopic = "My Movie List";
  const secondProjectParagraph =
    "My Movie List is a React app where you can search over thousands of movies and find details about them. You can also rate them and add to your watched list! New features will be applied soon.";
  const secondProjectLink = "https://ardsen.github.io/my-movie-list/";
  const thirdProjectTopic = "Forkify - A Recipe App";
  const thirdProjectParagraph =
    "Forkify is an app where you can search between thousands of recipes and find detailed information about them. The app was developed following the model-view-controller (MVC) architecture. It also has features like bookmarking, adding new recipes and more.";
  const thirdProjectLink = "https://main--forkify-arda.netlify.app/";
  const fourthProjectTopic = "Worldwise";
  const fourthProjectParagraph =
    "Worldwise is an app where you can select a city or place from a world map and take notes about that place. I implemented the Context API and the useReducer hook for state management. Additionally, I used the Leaflet API to get an interactive world map and Glitch for a fake JSON server, allowing the use of GET, POST, and DELETE methods to interact with an API.";
  const fourthProjectLink =
    "https://worldwise-git-main-ardsens-projects.vercel.app/";
  const githubH = "GitHub for More";
  const githubP = "You can visit my GitHub page to see more of my work.";
  const githubB = "https://github.com/ardsen";
  const handleEsc = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 27) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (count >= 6) {
      setCount((count) => 1);
    } else if (count <= 0) {
      setCount((count) => 4);
    }

    const changeImg = setInterval(() => {
      setCount((count) => count + 1);
    }, 9000);

    return () => clearInterval(changeImg);
  }, [count]);
  return (
    <>
      <main onKeyDown={handleEsc}>
        {count === 1 && (
          <ProjectsSection
            bg="url(/projects-img-1.png)"
            count={count}
            setCount={setCount}
            h={firtsProjectTopic}
            p={firstProjectParagraph}
            b={firstProjectLink}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {count === 2 && (
          <ProjectsSection
            bg="url(/worldwise.png)"
            count={count}
            setCount={setCount}
            h={fourthProjectTopic}
            p={fourthProjectParagraph}
            b={fourthProjectLink}
            githubRepo="https://github.com/ardsen/worldwise"
          />
        )}
        {count === 3 && (
          <ProjectsSection
            bg="url(/projects-img-2.png)"
            count={count}
            setCount={setCount}
            h={thirdProjectTopic}
            p={thirdProjectParagraph}
            b={thirdProjectLink}
            githubRepo="https://github.com/ardsen/forkify-app"
          />
        )}
        {count === 4 && (
          <ProjectsSection
            bg="url(/my-movie-list.png)"
            count={count}
            setCount={setCount}
            h={secondProjectTopic}
            p={secondProjectParagraph}
            b={secondProjectLink}
            githubRepo="https://github.com/ardsen/my-movie-list"
          />
        )}
        {count === 5 && (
          <ProjectsSection
            bg="url(/projects-img-4.png)"
            count={count}
            setCount={setCount}
            h={githubH}
            p={githubP}
            b={githubB}
          />
        )}
        <SkillsSection />
        <AboutSection />
        <Contact />
        {isModalOpen && <AboutApp setIsModalOpen={setIsModalOpen} />}
        {isModalOpen && (
          <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Main;

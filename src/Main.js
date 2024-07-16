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
  const korchaH = "Korcha - A Browser Game";
  const korchaP =
    "Korcha is my biggest and latest application yet. It is a turn-based web browser game developed with React. I created this app to enhance my React skills and test my capabilities. Currently, it is a front-end-only application, allowing users to sign up, log in, and play without a back-end. I am currently studying Node.js, and the back-end of the app will be completed soon.";
  const korchaB = "https://korcha-game.vercel.app/";
  const bankistH = "Forkify - A Recipe App";
  const bankistP =
    "Forkify is an app where you can search between thousands of recipes and find detailed information about them. The app was developed following the model-view-controller (MVC) architecture. It also has features like bookmarking, adding new recipes and more.";
  const bankistB = "https://main--forkify-arda.netlify.app/";
  const natgeoH = "Get a Country";
  const natgeoP =
    "Get a Country is an app where you can obtain information about the country you are currently located in, or discover details about a random country. I developed this app to practice API fetching and chaining multiple fetch requests. This application not only showcases my skills in handling APIs but also provides a user-friendly interface for exploring countries around the world.";
  const natgeoB = "https://ardsen.github.io/get-a-country/";
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
    if (count >= 5) {
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
            h={korchaH}
            p={korchaP}
            b={korchaB}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {count === 2 && (
          <ProjectsSection
            bg="url(/projects-img-2.png)"
            count={count}
            setCount={setCount}
            h={bankistH}
            p={bankistP}
            b={bankistB}
            githubRepo="https://github.com/ardsen/forkify-app"
          />
        )}
        {count === 3 && (
          <ProjectsSection
            bg="url(/projects-img-3.png)"
            count={count}
            setCount={setCount}
            h={natgeoH}
            p={natgeoP}
            b={natgeoB}
            githubRepo="https://github.com/ardsen/get-a-country"
          />
        )}
        {count === 4 && (
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

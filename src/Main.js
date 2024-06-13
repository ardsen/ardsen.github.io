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
  const korchaH = "Korcha - Turn Based Web Browser Game";
  const korchaP =
    "Korcha is my biggest and latest application yet. It is a turn-based web browser game developed with React. I created this app to enhance my React skills and test my capabilities. Currently, it is a front-end-only application, allowing users to sign up, log in, and play without a back-end. I am currently studying Node.js, and the back-end of the app will be completed soon.";
  const korchaB = "https://korcha-game.vercel.app/";
  const bankistH = "Bankist - A Banking App";
  const bankistP =
    "Bankist is an application that allows you to perform simple transactions such as transferring money and requesting loans. I developed this app during a JavaScript course taught by Jonas Schmedtmann on Udemy.";
  const bankistB = "https://ardsen.github.io/bankistapp/";
  const natgeoH = "National Geographic Homepage Clone";
  const natgeoP =
    "Natgeo Clone is an HTML and CSS only project. As my first project, it holds special significance for me. I created it while learning HTML and CSS to enhance my skills in these areas.";
  const natgeoB = "https://ardsen.github.io/nat-geo-homepage-clone/";
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
    }, 111111);

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

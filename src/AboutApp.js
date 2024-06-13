function AboutApp({ setIsModalOpen }) {
    return (
        <section className="about-app-section" style={{ scrollBehavior: "smooth" }}>
            <div className="about-project-modal">
                <div className="button-container">
                    <a href="#cont-1"><button >What is Korcha?</button></a>
                    <a href="#cont-2"><button >How to Play?</button></a>
                    <a href="#cont-3"><button >What is Korcha?</button></a>
                </div>
                <div className="what-is-korcha" id="cont-1">
                    <h3>What is Korcha?</h3>
                    <p>Korcha is an old-school turn-based browser game which I developed it to enhance my React.js skills and assess my capabilities. This project is still under development. My primary goal with this app is to implement a back-end with Node.js  thus transforming it into a full-stack project. This endeavor will not only expand my skill set but also deepen my understanding of Node.js. <br /> <br /> P.S. All the images on this project have been generated with AI.
                    </p>
                </div>
                <div className="how-to-play" id="cont-2">
                    <h3>How to Play?</h3>
                    <div className="how-to-play-container">
                        <div className="how-to-play-left">
                            <p>There are 5 different stats in the game which are HP, END, STR, INT, AGI. You will gain 3 stat points for each level up. Each monster will give you experience and gold according to its level. Distribute your stats, buy new items, defeat higher level enemies. Currently, there are two maps and 20 different enemies</p>
                            <img src="/healthcont.png" alt="health bar" />
                        </div>
                        <div className="how-to-play-right">
                            <img src="/statcont.png" alt="statistics" />
                        </div>
                    </div>
                    <div className="how-to-play-bottom">
                        <p>In the game, pressing the right button on the right time is essential. You should be able to manage your stamina and health bar. Basic attack deals less damage and consumes less stamina while strong attack deals more damage and consume more stamina. Also there is a crush attack which ignores the opponents defence. You also can choose to play sorcerer class to deal tons of damage with spells but you should be careful with your health bar.

                        </p>
                        <div >
                            <img src="attackcont.png" alt="attack section" />
                        </div>
                    </div>
                </div>
                <div className="classes" id="cont-3">
                    <h3>Classes</h3>
                    <p>There are three main classes in the game: Warrior/Knight, Sorcerer/Mage, Thief/Rogue.</p>
                    <div className="class-card">
                        <div><img src="/orc-finalization-warrior.png" alt="orc warrior" /></div>
                        <p><span>Warrior/Knight:</span> Has the greatest Physical Attack Power in the game. They use greatswords and greataxes which has the highest physical attack power. This class has stable, high damage and also good amount of health point. STR - HP stats are recommended.

                        </p>
                        <div><img src="/human-warrior-finalization.png" alt="human warrior" /></div>
                    </div>
                    <div className="class-card">
                        <div><img src="/orc-finalization-sorcerer.png" alt="orc warrior" /></div>
                        <p><span>Sorcerer/Mage:</span> Sorcerer/Mage: Has the greatest Magical Attack Power in the game. They use staffs, scepters. Sorcerers has highest stable damage among the all classes. But because of that, it is the class that has lowest health point in the game. INT - END - HP stats are recommended.
                        </p>
                        <div><img src="/human-sorcerer-finalization.png" alt="human warrior" /></div>
                    </div>
                    <div className="class-card">
                        <div><img src="/orc-finalization-warlock.png" alt="orc warrior" /></div>
                        <p><span>Thief/Rogue:</span>This class is capable of deal maximum damages in the game. They use daggers which are the weapons that have high critical rate. Agility also makes rogues to deal higher critical damage. AGI - HP stats are recommended.

                        </p>
                        <div><img src="/human-warlock-finalization.png" alt="human warrior" /></div>
                    </div>

                </div>
            </div>
            <span onClick={() => setIsModalOpen(false)} className="close-button"><img src="/close.svg" alt="close icon" /></span>
        </section>
    )
}

export default AboutApp

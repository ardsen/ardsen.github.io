function AboutSection() {
  return (
    <section className="about-section-container" style={{ marginBottom: "100px" }} id="section-3">
      <div className="about-section-inner-container">
        <div className="about-section-info-container">
          <h3>About Me</h3>
          <p>
            &nbsp;&nbsp; Hello, I am Arda. After graduating from Hacettepe
            University, Department of International Relations, I went to the
            United States for a couple of months to work. In my time in the US,
            I worked there as a line cook and photographer. After returning to
            Turkey, I worked in the fields of Digital Marketing, Social Media
            Management, and Video Editing for almost a year. During this time, I
            became enthusiastic about software development. I enrolled in a
            course at Neos Software and also did my internship there. While I
            was taking that course and later, I supported my learning process
            with Udemy courses and by building my own projects. Nowadays, I am
            working on Node.js, using Express.js, MongoDB, and Mongoose for
            back-end development, along with more advanced React for front-end
            development.
          </p>
          <p>
            <a href="/resume.pdf" target="_blank">
              {" "}
              You can find more about me in my CV
            </a>
            <span>⬇️</span>
          </p>
        </div>
        <div className="about-section-img-container">
          <img src="/arda.png" alt="Me"></img>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

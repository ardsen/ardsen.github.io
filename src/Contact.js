import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="contact-section" id="section-4">
      <div className="contact-section-container">
        <ContactForm />
        <h3>Socials</h3>
        <div className="svg-container">
          <a href="https://github.com/ardsen" target="_blank" rel="noreferrer">
            {" "}
            <img src="/github.svg" alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ardsen/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="/linkedin.svg" alt="linkedin icon" />
          </a>
          <a
            href="https://www.instagram.com/ardsenn/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/insta.svg" alt="instagram icon" />
          </a>
          <a
            href="https://www.facebook.com/ardsen/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.svg" alt="facebook icon" />
          </a>
          <a href="https://x.com/ardsenn" target="_blank" rel="noreferrer" style={{ transform: "scale(1.1)" }}>
            <img src="/twitter.svg" alt="twitter icon" />
          </a>
          <a
            href="mailto:as.ardasen@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="mail.svg" alt="Mail Icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

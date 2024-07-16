import React from "react";

function ContactForm() {
  return (
    <div className="contact-container">
      <form
        action="https://formspree.io/f/myyrrklj"
        method="POST"
        className="contact-form"
      >
        <h3>Contact Me</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name..."
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="_replyto"
          required
          placeholder="Your e-mail..."
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Your message..."
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;

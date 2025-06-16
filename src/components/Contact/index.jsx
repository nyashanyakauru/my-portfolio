import React from "react";
import PageHeader from "../PageHeader";
import { FaAddressCard} from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Get in Touch"
        icon={<FaAddressCard size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateY(40px)", opacity: 0 }}
          end={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <h3 className="contact__content__header-text">Let’s Talk</h3>
          <p className="contact__content__description">
            Have a project or question? Send me a message or connect with me directly.
          </p>
        </Animate>

        <div className="contact__content__body">
          {/* Left: Form */}
          <Animate
            play
            duration={1}
            delay={0.3}
            start={{ transform: "translateY(40px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <form className="contact__content__form">
              <div className="contact__content__form__controlswrapper">
                <div className="inputGroup">
                  <input type="text" name="name" required />
                  <label>Name</label>
                </div>
                <div className="inputGroup">
                  <input type="email" name="email" required />
                  <label>Email</label>
                </div>
                <div className="inputGroup fullWidth">
                  <textarea name="description" rows="5" required></textarea>
                  <label>Message</label>
                </div>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </Animate>

          {/* Right: Contact Info */}
          <div className="contact__content__infoCard">
            <h4>Contact Info</h4>
            <ul>
              <li><MdEmail /> nyasha@example.com</li>
              <li><MdPhone /> +263 786 664 875</li>
              <li>
                <a href="https://wa.me/263786664875" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/feed/">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/nyashanyakauru" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

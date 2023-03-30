import Header from "../components/Header";
import { contact } from "../data/contact";
import "../css/contact.css";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className="container contact">
        <div className="contact__img-inputs">
          <div className="contact__img">
            <img src={contact[0].mainUrl} alt="" />
          </div>
          <div className="contact__texte-inputs">
            <div className="contact__texte">
              <h1>Contact Me</h1>
              <p>Email : julienobry01@gmail.com</p>
              <p>Phone : (+33) 7769039324</p>
              <p>
                Studio visits by appointment only in
                <br /> London, England
              </p>
            </div>
            <div>
              <div className="contact__input">
                <p>Name*</p> <input type="text" />
              </div>
              <div className="contact__input">
                <p>Email*</p> <input type="text" />
              </div>
              <div className="contact__input">
                <p>Message</p> <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

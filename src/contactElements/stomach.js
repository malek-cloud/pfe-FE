import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Location from "./location";


function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loader, setloader] = useState(false);
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  if (done) {
    setTimeout(() => {
      setDone(false);
    }, 4000);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setloader(true);
    emailjs
      .sendForm(
        "service_8jtuimm",
        "template_9ams1n9",
        form.current,
        "user_0tb3vnyvCJGUWsGSA8S80"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setEmail("");
          setMessage("");
          setNom("");
          setloader(false);
          console.log(form.current)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
   <div>
      <div id="contactform" className="contactForm">
      <div className="contacttext">
        <div className="contactTitle">Send us a message 📪</div>
        <div className="hh">
          Feel free to contact us whenever you want, send us your feedbacks or
          ask us for a favor, job, project ... we will be more than glad to hear
          and answer you.
        </div>
        <form ref={form} onSubmit={sendEmail} className="inputs">
          <input
            value={nom}
            type="text"
            name="user_name"
            placeholder="🤗 Enter your name"
            className="nameContact"
          />
          <input
            value={email}
            type="email"
            name="user_email"
            placeholder="🤗 Enter your email"
            className="nameContact"
          />
          <textarea
            value={message}
            name="message"
            placeholder="🤗 Enter your message"
            className="nameContact"
            rows="5"
          ></textarea>

          {loader ?
          <div className="loader"></div>
          :
          <div>
            {done ? (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "3vh",
                  fontSize: "18px",
                  marginBottom: "2vh",
                }}
              >
                Your message have been sent successfully 👏
              </div>
            ) : (
              <button className="sendContact" type="submit">
                Send Now !
              </button>
            )}
          </div>}
        </form>
      </div>
      <div className="verticalLine"></div>
      <div className="contactIcons">
       <div className="iconcontact">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          color="yellow"
          height="30"
          fill="purple"
          className="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
       </div>
        <div className="words">Address</div>
        <div className="xordsdesc">
          10 Bis Rue <br /> d'Algerie 1001 Tunis, Tunisie
        </div>
       <div className="iconcontact">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="purple"
          className="bi bi-telephone-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
       </div>
        <div className="words">Phone</div>
        <div className="xordsdesc">
          +216 25 801 660 <br /> +216 26 995 159
        </div>
        <div className="iconcontact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="purple"
          className="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg>
        </div>
        <div className="words">Email</div>
        <div className="xordsdesc">
          bemaker.contact@gmail.com <br />
          haithemdaboussi@gmail.com
        </div>
      </div>

    </div>
    <Location/>

   </div>
  );
}
export default Contact;

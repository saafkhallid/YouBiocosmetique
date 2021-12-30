import React, { useState } from 'react'
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="text-success text-center fx-4 md-2">
      You message has been succesfully sent i will contact you soon
    </p>
  );
}


function Contact() {

  const [result, showResult] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_83xy8fq",
          "template_c721aeo",
          e.target,
          "user_xpDeUuJnHfZictNme9ScX"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
      );
      e.target.reset();
      showResult(true);
  };
  

  return (
    <div>
      <div>
        <h1 className=" colun text-dark text-center font-weight-bold   ">
          Contact Us
        </h1>
      </div>
      <div className="container-fluid row  d-flex justify-content-around  align-items-center ">
        <div className="form-container">
          <p className="form-container__logo">
            <span className="Titre1">#YouBio</span>
            <span className="Titre2">cosmetique</span>
          </p>

          <form action="index.html" onSubmit={sendEmail}>
            <div className="email control">
              <input
                className="control--titre"
                type="name"
                name="fullName"
                placeholder="name"
              />
            </div>

            <div className="password control">
              <input
                className="control--titre "
                name="Phone"
                type="text"
                placeholder="Phone number"
              />
            </div>

            <div className="password control">
              <input
                className="control--titre"
                name="email"
                type="Email"
                placeholder="Email Address"
              />
            </div>

            <div className="password control">
              <input
                className="control--titre"
                name="subject"
                type="text"
                placeholder="subject"
              />
            </div>

            <div className="password control">
              <textarea
                rows="4"
                cols="10"
                className="control--titre "
                name="message"
                type="name"
                placeholder="Message"
              />
            </div>

            {/* <p className="controle--para">
              <a href="#" className="controle--pass">
                {" "}
                Mot de passe oublié?
              </a>
            </p> */}
            <div className="control">
              <input
                type="submit"
                className=" btn font-weight-bold text-light bg-secondary "
                value="ENVOYER"
              />
            </div>
            <div className="Result">{result ? <Result /> : null}</div>
          </form>
        </div>
        <div className="form-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.385269669673!2d-8.524001885289346!3d32.24771478113505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaefdf7a5abd215%3A0xf838facafb432e7b!2sYoucode!5e0!3m2!1sfr!2sma!4v1634764892862!5m2!1sfr!2sma"
            width="700"
            height="700"
            className="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact

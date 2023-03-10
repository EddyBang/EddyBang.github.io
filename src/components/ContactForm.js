import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5v104qn",
        "template_74xb314",
        e.target,
        "xOjTc2czq_HwhNANc"
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
  }
  return (
    <div>
      <div class="moi" style={{ height: "50px", width: "43.2%" }}>
        <d>
          <b>Contact</b>
        </d>
        <c> Me :</c>
      </div>
      <div className="saut"></div>
      <div class="container" style={{ height: "100px", textAlign: "left" }}>
        <div className="row">
          <div className="col">
            <img
              src="contactform.gif"
              style={{
                width: "80%",
                borderRadius: "5%",
                border: "solid rgb(39, 158, 167) ",
                boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
              }}
            ></img>
          </div>
          <div className="col">
            <form onSubmit={sendEmail}>
              <div className="row">
                <div class="col">
                  <input type="text" name="name" placeholder="Nom" required />
                </div>
              </div>

              <div className="row">
                <div class="col">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="from-group">
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Votre message"
                  />
                </div>
              </div>
              <div class="saut0"></div>
              <div class="centrer">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                  style={{
                    width: "30%",
                    height: "30%",
                    color: "rgb(153, 42, 144)",
                  }}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

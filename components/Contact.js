import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import Socials from "./Socials"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    from_email: "",
    message: "",
  })

  const [buttonText, setButtonText] = useState("Send")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submission")
    setButtonText("Sending...")

    const serviceID = "default_service"
    const templateID = "contact_form"

    emailjs
      .sendForm(serviceID, templateID, e.target, "user_YxwFrRykJUoJKL7uQBWYD")
      .then(
        () => {
          setButtonText("Send")
          alert("Sent!")
        },
        (err) => {
          setButtonText("Send")
          alert(JSON.stringify(err))
        }
      )
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "relative",
          minHeight: "",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          className='notPhone'
          src='email_to.svg'
          alt='email-illustration'
          style={{ maxWidth: "600px", margin: "0 auto" }}
        />
        <img
          className='onlyPhone'
          src='email_page.svg'
          alt='page-illustration'
          style={{ maxWidth: "90%", margin: "0 auto" }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-50px",
          }}
        >
          <Socials />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <form id='contact-form' onSubmit={handleSubmit}>
            <div className='from_container'>
              <img
                src='email_from.svg'
                className='label'
                style={{
                  marginRight: "10px",
                  marginBottom: "-3px",
                  width: "60px",
                }}
              />
              <input
                type='text'
                id='name'
                name='from_name'
                value={formState.from_name}
                onChange={handleChange}
                required
              />
              <button
                id='button'
                type='submit'
                style={{
                  background: `url(${(buttonText=="Send")?"email_send.svg":"sending.gif"})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "30px",
                  height: "30px",
                  border:"none"
                }}
              ></button>
            </div>
            <div className='email_container'>
              <img
                src='email_email.svg'
                className='label'
                width='60px'
              />
              <input
                type='email'
                id='from_email'
                name='from_email'
                value={formState.from_email}
                onChange={handleChange}
                required
              />
            </div>

            <img
              className='message_label'
              src='email_dear.svg'
              width='100px'
              // style={{ marginRight: "10px", marginBottom: "-3px" }}
            />
            <textarea
              id='message'
              name='message'
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

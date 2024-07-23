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
          minHeight: "80vh",
          width: "max-content",
        }}
      >
        <img src='email_to.svg' width='600vw' />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-50px",
          }}
        >
          <Socials />
        </div>
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            top: "0",
            padding: "10vh",
            width: "100%",
          }}
        >
          <img
            src='email_from.svg'
            height={"15"}
            style={{ marginRight: "10px", marginBottom: "-3px" }}
          />
          <input
            type='text'
            id='name'
            name='from_name'
            value={formState.from_name}
            onChange={handleChange}
            required
          />
          <div
            id='button'
            type='submit'
            style={{
              background: "url(email_send.svg)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "inline",
              float: "right",
              width: "30px",
              height: "30px",
            }}
          ></div>
          <div style={{ marginTop: "10px", marginBottom: "20px" }}>
            <img
              src='email_email.svg'
              height={"15"}
              style={{ marginRight: "10px", marginBottom: "-3px" }}
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
            src='email_dear.svg'
            height={"20"}
            style={{ marginRight: "10px", marginBottom: "-3px" }}
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
  )
}

export default ContactForm

import React, { useState } from "react"
import emailjs from "@emailjs/browser"

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
        <img src='mail.svg' width='600vw' />
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            top: "10vh",
            left: "10vh",
          }}
        >
          <label htmlFor='from_name'>Name:</label>
          <input
            type='text'
            id='name'
            name='from_name'
            value={formState.from_name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='from_email'>Email:</label>
          <input
            type='email'
            id='from_email'
            name='from_email'
            value={formState.from_email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
          <button id='button' type='submit'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

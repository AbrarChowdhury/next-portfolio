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
    <form id='contact-form' onSubmit={handleSubmit}>
      <label htmlFor='from_name'>Name:</label>
      <input
        type='text'
        id='name'
        name='from_name'
        value={formState.from_name}
        onChange={handleChange}
        required
      />
      <label htmlFor='from_email'>Email:</label>
      <input
        type='email'
        id='from_email'
        name='from_email'
        value={formState.from_email}
        onChange={handleChange}
        required
      />
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
  )
}

export default ContactForm
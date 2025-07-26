import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import type React from 'react';

type errorTypes = {
  name?: string,
  email?: string,
  message?: string,
}

export default function Contact() {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const formRef = useRef<HTMLFormElement>(null);
  const [error, SetError] = useState<errorTypes>({});

  const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      console.error("form ref error")
      return
    }

    try {

      const validateInput: errorTypes = {}

      const formData = new FormData(formRef.current);

      const name = formData.get("name") as string;
      if (!name || name.length <= 0) {
        validateInput.name = "Name cannot be empty"
      }

      const email = formData.get("email") as string
      if (!email || !EMAIL_REGEX.test(email)) {
        validateInput.email = "Invalid email"
      }

      const message = formData.get("message") as string;
      if (!message || message.length <= 0) {
        validateInput.message = "Message cannot be empty"
      }

      if (Object.keys(validateInput).length > 0) {
        SetError(validateInput)
        return;
      }

      SetError({})

      const sendEmail = await emailjs.sendForm(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        formRef.current,
        {publicKey: import.meta.env.VITE_API_PUBLIC_KEY}
      )

      alert("Email sent")
      formRef.current?.reset()
      console.log(sendEmail)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mt-15">
      <div>
        <h1 className="text-4xl font-bold text-gray-700">Get in Touch</h1>
        <p className="mt-4">Thank you for your interest in getting in touch with me. I'm always excited to connect with new people. Please feel free to reach out using any of the methods below, and I'll do my best to respond to your message within 24 hours. I look forward to hearing from you and learning more about how we might work together.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>     
        <a href="https://www.linkedin.com/in/bart-batiancila-316a52322/" target="_blank" className='tooltip' data-tip="linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className='tooltip' data-tip="email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <form 
        ref={formRef}
        className="grid grid-cols-2 w-100 gap-2 mt-4"
        onSubmit={onSubmit}
      >
        <div>
          <input 
            type="text"
            name="name"
            placeholder="name"
            className="border w-full border-gray-300 rounded-md shadow p-2 focus:outline-0 text-sm"
          />
          {error.name && <p className="text-sm text-red-600">{error.name}</p>}
        </div>
        <div>
          <input 
            type="email"
            name="email"
            placeholder="email"
            className="border w-full border-gray-300 rounded-md shadow p-2 focus:outline-0 text-sm"
          />
          {error.email && <p className="text-sm text-red-600">{error.email}</p>}
        </div>
        <div className="col-span-2">
          <textarea 
            name="message" 
            placeholder="message"
            className="border w-full border-gray-300 rounded-md shadowresize-none h-25 p-2 focus:outline-0 text-sm"
          />
          {error.message && <p className="text-sm text-red-600">{error.message}</p>}
        </div>
        <button
          className="cursor-pointer py-2 font-semibold text-sm bg-cyan-600 w-30 rounded-md text-white col-end-3 justify-self-end hover:bg-cyan-700 "
        >
          Submit
        </button>
      </form>
    </div>
  )
}
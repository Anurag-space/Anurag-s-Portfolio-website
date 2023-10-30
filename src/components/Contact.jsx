/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

import SocialMediaIcons from '../components/SocialMediaIcons'

const Contact = () => {
  const myEmail = 'anuragak402@gmail.com'
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'service_3baipf2',
        'template_4ug1zkf',
        {
          from_name: form.name,
          to_name: 'Em',
          from_email: form.email,
          to_email: myEmail,
          message: form.message,
        },
        'x_rj_SWg5AokCeduj'
      )
      .then(
        () => {
          setLoading(false)
          alert(
            'Thanks for the message. I will get back to you as soon as possible'
          )
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          alert(
            `Something went Wrong. No email was sent. You can email me directly at ${myEmail}`
          )
        }
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className="text-[20px] font-playfair">
          {' '}
          Feel Free to contact me using the links below, or by sending me a
          message!
        </p>
        <SocialMediaIcons />

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium font-playfair"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium font-playfair"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium font-playfair"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl font-playfair"
          >
            {' '}
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 md:h-[400px] h-[250px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')

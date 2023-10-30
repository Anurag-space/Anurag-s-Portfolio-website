import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import AccordionMenu from './AccordionMenu.jsx'

const ServiceCard = ({ index, title, icon }) => {
  // variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}

  return (
    <div className="xs:w-[250px] w-full">
      <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 0, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center font-playfair">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  )
}
// pt-[400px] pb-[2800px]         variants={fadeIn('up', 'spring', 1, 1)}  variants={textVariant()}

const About = () => {
  return (
    <div className="md:pt-1">
      <motion.div>
        <h2 className={`mt-20 ${styles.sectionHeadText}`}>About Me</h2>
      </motion.div>
      <motion.p className="mt-4 text-white text-[24px] max-w-6xl leading-[35px] font-playfair">
      Full Stack Developer with one year of experience in web application development. Proficient in JavaScript, HTML, CSS, and frameworks like React and Node.js. Collaborated with cross-functional teams to deliver user-centric solutions. Optimized application performance and integrated third-party APIs. Actively participated in code reviews and agile methodologies. Committed to staying updated with the latest technologies and trends, and passionate about contributing to open source projects to support the developer community and foster collaboration.
      </motion.p>
      <motion.p className="mt-4 text-white text-[24px] max-w-6xl leading-[35px] font-playfair">
        In my next position I am looking for three core things:
        <div className="mt-5">
          <ul>
            <li>
              {' '}
              <span className="font-bold text-[#FC59FF]">Growth</span>: A place
              where I can grow my technical and professional capabilities
            </li>{' '}
            <li>
              {' '}
              <span className="font-bold text-[#FC59FF]">Stability</span>: A
              place that has a clear vision and a proven track record of success{' '}
            </li>
            <li>
              {' '}
              <span className="font-bold text-[#FC59FF]"> Collaboration</span>:
              A place that values teamwork
            </li>
          </ul>
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-20">
        <h2 className="text-secondary text-[34px]">FAQs about me</h2>

        <AccordionMenu />
      </div>
    </div>
  )
}
// export default About
export default SectionWrapper(About, 'about')

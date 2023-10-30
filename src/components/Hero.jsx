import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { personalPhotos } from '../constants'
import SocialMediaIcons from '../components/SocialMediaIcons'

const PictureCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[300px] pr-10">
      <motion.div
        variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
        className=" green-pink-gradient p-4 px-5 rounded-[20px] shadow-card items-stretch w-[400px] h-[500px]"
      >
        <div
          options={{ max: 0, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-2 px-2 justify-evenly items-stretch flex flex-col w-full h-full"
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>
      </motion.div>
    </Tilt>
  )
}

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex">
      <div className="flex">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} // !PCheck
        >
          <div className="flex flex-col justify-center items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-[#9153ff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="content flex">
            <div className="content flex flex-col w-1/2 h-full p-4 pr-10">
              <h1 className={`${styles.heroHeadText} text-white flex`}>
                Hi, I'm <span className="text-[#915eff]"> &nbsp; Em</span>
              </h1>

              <p className=" flex mt-4 text-white text-[28px] max-w-6xl leading-[35px]">
                I am a Web Developer that builds Websites.I am a Freelancer.I am a team player
                and a joy to work with.
              </p>

              <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <SocialMediaIcons />
              </motion.div>
            </div>
            <div className="flex flex-row mt-5 -mx-4 gap-7">
              {personalPhotos.map((photo, index) => (
                <>
                  <PictureCard
                    key={`photo-${index}`}
                    index={index}
                    {...photo}
                  />
                  {/* <p className="p-5"> &nbsp;</p> */}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero

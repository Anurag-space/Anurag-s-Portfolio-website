/* eslint-disable multiline-ternary */
import SocialMediaIcons from '../components/SocialMediaIcons'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { mLondon } from '../assets'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')

  return (
    <section
      id="home"
      className=" md:flex md:justify-between md:items-center gap-16 h-screen py-20 -mt-28"
    >
      {/* IMAGE SECTION */}
      <div className=" basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2  before:border-[#24CBFF] before:z-[-1] before:rounded-lg">
            {' '}
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-2xl border-2 border-[#24CBFF]"
              src={mLondon}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-2xl border-2 border-[#24CBFF]"
            src={mLondon}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Anurag {''}
            <span
              className={`xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]`}
            >
               &nbsp;Kumar{' '}
            </span>
          </p>

          <p className="mt-10 mb-7 pb-6 text-[20px] text-center md:text-start">
            My name is Anurag Kumar, but most people call me{' '}
            <span className="font-bold text-[#FC59FF]">Yadav jii</span>. Welcome to my
            portfolio website! I'm a Web Developer that built this website
            using{' '}
            <span className="font-bold text-[#24CBFF]">
              React.js, TailwindCSS
            </span>{' '}
            and <span className="font-bold text-[#24CBFF]">Three.js </span>to
            show off some of my technical chops as well as have a place to host
            my other projects.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

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
    </section>
  )
}

export default SectionWrapper(Landing, '')

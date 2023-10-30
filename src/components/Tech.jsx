import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant, fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'

import { Tooltip as ReactTooltip } from 'react-tooltip'

const LanguageCard = () => {
  return (
    <Tilt className="xs:w-[400px] w-full ">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex  flex-col"
        >
          <h3 className="text-white text-[20px] font-bold text-center font-playfair">
            Languages
          </h3>
          <li className="text-white-100 text-[14px] pl-1 tracking-wider font-playfair">
            Python
          </li>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Technologies I Use</p>
        <p> &nbsp;</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pb-[100px]">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <>
              <div
                data-tooltip-id="tech"
                data-tooltip-content={technology.name}
              >
                <BallCanvas icon={technology.icon} />
              </div>
              <ReactTooltip id="tech" className="text-black bg-purple-500" />
            </>
          </div>
        ))}
      </div>
      {/* <LanguageCard /> */}
    </>
  )
}

export default SectionWrapper(Tech, 'tech')

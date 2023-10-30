import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto md:relative`}
      >
        <span className="hash-spans" id={idName}></span> &nbsp;
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper

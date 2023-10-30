import { BrowserRouter } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from './hooks/useMediaQuery'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  DotGroup,
  Landing,
} from './components'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage('home')
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* <div className="w-5/6 mx-auto md:h-full hidden">
            {isDesktop && (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('home')}
            >
              <Hero />
            </motion.div>
          </div> */}
          {/* <Hero /> */}
          <div className="w-5/6 mx-auto md:pb-1">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('')}
            >
              <Landing />
            </motion.div>
          </div>
        </div>
        <div>
          <StarsCanvas />

          <div className="w-5/6 mx-auto pt-[200px] md:pt-1">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('about')}
            >
              <About />
            </motion.div>
          </div>
          <div className="w-5/6 mx-auto">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('experience')}
            >
              <Experience />
            </motion.div>
          </div>

          <div className="w-5/6 mx-auto  ">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('tech')}
            >
              <Tech />
            </motion.div>
          </div>
          <div className="w-5/6 mx-auto  ">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
              onViewportEnter={() => setSelectedPage('works')}
            >
              <Works />
            </motion.div>
          </div>
          {/* <Feedback /> */}
          <div className="relative z-0">
            <div className="w-5/6 mx-auto  ">
              <motion.div
                margin="0 0 -200px 0"
                amount="all"
                onViewportEnter={() => setSelectedPage('contact')}
              >
                <Contact />
              </motion.div>
            </div>{' '}
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

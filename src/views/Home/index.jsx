import React, { useEffect, useState } from "react"

import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Projects from 'components/Projects'

import image from 'assets/lesantosx-circle.png'
import About from "components/About"

export default function Home() { 
  const [showAbout, setShowAbout] = useState('hidden')
  const [showSkills, setShowSkills] = useState('hidden')
  const [showProjects, setShowProjects] = useState('hidden')

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setShowAbout('show')
        setShowSkills('show')
      } 

      if(window.scrollY > 300){
        setShowProjects('show')
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []) 

  return (    
    <main className={styles.container}>
      <Banner 
        title="Hello, I'm Letícia Santos" 
        description="Front-end Developer" 
        img={image}               
      /> 
      <About showAbout={showAbout} />
      <Skills showSkills={showSkills}/>      
      <Projects showHighlights={showProjects}/>       
    </main>           
  )
}

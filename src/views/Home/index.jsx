import React, { useEffect, useState } from "react"

import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import image from 'assets/lesantosx-circle.png'

export default function Home() {
  const [showSkills, setShowSkills] = useState('hidden')
  const [showProjects, setShowProjects] = useState('hidden')

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
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
      <Skills showSkills={showSkills}/>      
      <Projects showHighlights={showProjects}/>       
    </main>           
  )
}

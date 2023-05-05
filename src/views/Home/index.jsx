import React, { useEffect, useState } from "react"

import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Projects from 'components/Projects'

import image from 'assets/lesantosx-circle.png'

export default function Home() { 
  const [showSkills, setShowSkills] = useState('hidden')
  const [showHighlights, setShowHighlights] = useState('hidden')

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setShowSkills('show')
      } 

      if(window.scrollY > 300){
        setShowHighlights('show')
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
      <section id="about" className={styles.section__aboutme}>
        <span className={styles.aboutme}>
          3+ years of web development experience. Has been working on full stack development, 
          but always focusing on the front-end. Bringing performance improvements, 
          clean code and reusable components.
        </span>   

      </section>
      <Skills showSkills={showSkills}/>      
      <Projects showHighlights={showHighlights}/>       
    </main>           
  )
}

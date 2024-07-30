import React, { useEffect, useState } from 'react'

import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import image from 'assets/lesantosx-circle.png'

export default function Home() {
  return (    
    <main className={styles.container}>
      <Banner 
        title="Hello, I'm Letícia Santos" 
        description="Front-end Developer" 
        img={image}               
      />
      <Skills />      
      <Projects />       
    </main>           
  )
}

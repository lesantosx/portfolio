import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Highlights from 'components/Highlights'

import image from 'assets/sammy-line-workflow.gif'

export default function Home() {
  return (    
    <main className={styles.container}>
      <center>
      <>
        <Banner 
          title="Hello, I'm Letícia Santos" 
          description="Front-end Developer" 
          img={image} 
          link="https://icons8.com/illustrations/author/7WmtYU90j36d"
          alt="Illustration by Fruzka"
        /> 
        <Skills />
        <Highlights />                
      </>    
      </center>     
    </main>
  )
}

import React, { Component } from 'react'

import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Highlights from 'components/Highlights'

import image from 'assets/lesantosx-circle.png'


export default class Home extends Component { 

  constructor() {
    super();
    this.state = {
       showSkills: 'hidden',
       showHighlights: 'hidden'
    }
  }
  
  handleScroll() { 
    if (document.documentElement.scrollTop > 50) {
      this.setState({
        showSkills: 'show'
      })
    }
    if(document.documentElement.scrollTop > 300){
      this.setState({
        showHighlights: 'show'
      })
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }    

  render() {
    return (    
      <main className={styles.container}>
        <center>
          <>
            <Banner 
              title="Hello, I'm Letícia Santos" 
              description="Front-end Developer" 
              img={image}               
            /> 
            <div className={styles.section__aboutme}>
              <span className={styles.aboutme}>
              3+ years of web development experience. Has been working on full stack development, 
              but always focusing on the front-end. Bringing performance improvements, 
              clean code and reusable components.
              </span>
            </div>
            <Skills showSkills={this.state.showSkills}/>
            <Highlights showHighlights={this.state.showHighlights}/>                
          </>    
        </center>     
      </main>
    )
  }
}

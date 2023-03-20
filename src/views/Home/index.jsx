import React, { Component } from 'react';
import styles from './Home.module.scss'
import Banner from 'components/Banner'
import Skills from 'components/Skills'
import Highlights from 'components/Highlights'

import image from 'assets/sammy-line-workflow.gif'

export default class Home extends Component { 

  constructor() {
    super();
    this.state = {
       className: 'hidden'
    }
  }
  
  handleScroll() { 
    
   if (document.documentElement.scrollTop > 200) {
    //console.log(document.documentElement.scrollTop);
      this.setState({
        className: 'show'
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
              link="https://icons8.com/illustrations/author/7WmtYU90j36d"
              alt="Illustration by Fruzka"
            /> 
            <Skills />
            <Highlights className={this.state.className}/>                
          </>    
        </center>     
      </main>
    )
  }
}

import styles from './About.module.scss'

export default function AboutMe() {
  return (
    <section id="about" className={styles.about_me}>
      <div id="about" className={styles.about__section}>
        <h1>about me<span>.</span></h1>
        <div className={styles.about}>
          <span>
            My name is Letícia Santos, Front End developer from São Paulo, Brazil. I have more than 4 years of experience with web development.
            I have a degree in ADS (Systems Analysis and Development) and a postgraduate degree in Information Intelligence.
            Currently working as a web developer for a healthcare technology company. I am dedicated to front-end development in my career.            
          </span>						
        </div>					
      </div>      

      <div className={styles.design_section}>
        <h1 className={styles.work_experience}>work experience<span>.</span></h1>
        <div className={styles.timeline}>
          <div className={styles.timeline_empty}></div>

          <div className={styles.timeline_middle}>
            <div className={styles.timeline_circle}></div>
          </div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_period}>
              <span>June, 2021 - Present</span>
              <span className={styles.timeline_company}>São Paulo, Brazil</span>
            </div>
            <div className={styles.timeline_period}>
              <span>Junior Developer</span>
              <span className={styles.timeline_company}>Bionexo</span>
            </div>
          </div>

          <div className={styles.timeline_content}>
            <div className={styles.timeline_period}>
              <span>Mar, 2020 - Jun, 2021</span>
              <span className={styles.timeline_company}>São Paulo, Brazil</span>
            </div>
            <div className={styles.timeline_period}>
              <span>Junior Web Developer</span>
              <span className={styles.timeline_company}>Enter5</span>
            </div>
          </div>
          <div className={styles.timeline_middle}>
            <div className={styles.timeline_circle}></div>
          </div>
          <div className={styles.timeline_empty}></div>

          <div className={styles.timeline_empty}></div>
          <div className={styles.timeline_middle}>
            <div className={styles.timeline_circle}></div>
          </div>
          <div className={styles.timeline_content}>
            <div className={styles.timeline_period}>
              <span>Jul, 2018 - Jan, 2020</span>
              <span className={styles.timeline_company}>São Paulo, Brazil</span>
            </div>
            <div className={styles.timeline_period}>
              <span>Technical Support Analyst</span>
              <span className={styles.timeline_company}>Locaweb</span>
            </div>
          </div>
        </div>
      </div> 
      <div className={styles.connect_section}>Want to know more about my career?
        <a href="https://www.linkedin.com/in/lesantosx/" className={styles.connect} target="_blank" rel="noreferrer">
          Connect with me! :)
        </a>
      </div>
		</section>
  )
}

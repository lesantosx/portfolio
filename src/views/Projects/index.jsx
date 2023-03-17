import styles from './Projects.module.scss'

import Developments from 'components/Developments'
import Banner from 'components/Banner'

import posts from 'json/posts.json'
import image from 'assets/sammy-line-17.png'

export default function Projects() {
  return (
    <main>
      <Banner 
        title="Projects" 
        description="" 
        img={image} 
        alt="Illustration by Elisabet Guba" 
        link="https://icons8.com/illustrations/author/lZpGtGw5182N"
      /> 
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Developments key={post.id} post={post}/> 
            </li>                     
          )
        })}
      </ul>
    </main>
  )
}

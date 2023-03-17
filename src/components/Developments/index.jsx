import styles from './Developments.module.scss'

export default function Developments({ post }) {
  return (
    <div className={styles.post}>
      <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt="" />
      <h2 className={styles.title}>{post.titulo}</h2>
      <button className={styles.btnRead}>Ler</button>
    </div>
  )
}

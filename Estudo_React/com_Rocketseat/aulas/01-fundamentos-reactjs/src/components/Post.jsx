import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
              <img className={styles.avatar} src="https://github.com/Miguel-ectil.png" />
              <div className={styles.authorInfo}>
                <strong>Miguel Ectil</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <time title="09 de Novembro as 13:14h" dateTime='2022/09/11 13:13:50'>Publicado há 1h</time>
        </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}

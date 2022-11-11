import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar}
        src="https://github.com/Miguel-ectil.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Miguel ectil</strong>
            <time title="09 de Novembro as 13:14h" dateTime='2022/09/11 13:13:50'>Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
             Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  )
}
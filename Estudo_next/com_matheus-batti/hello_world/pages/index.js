import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyworkds" content="Roupas, Calçados, Boné"></meta>
      <meta 
        name="Description"
        content='Encontre a melhor roupa para você'
      ></meta>
    </Head>
      <div>
        <h1 className={styles.title}>Bem vindo Miguel</h1>
      </div>
      
    </>
  )
}

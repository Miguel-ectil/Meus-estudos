
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar }  from './components/Sidebar';

import styles from './App.module.css';
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam perferendis vel optio delectus velit eum totam, est recusandae. Illo ducimus culpa eveniet aliquam minima, molestiae quos accusantium sapiente? Ipsa, laborum." 
          /> 
          <Post 
            author="Maikol Ectil" content="Hei broth estou estudando um curso de React aqui, e estamos criando um pprojeto." 
          />
        </main>
      </div>
    </div>
  )
}



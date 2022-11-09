import styles from './Sidebar.module.css'

import { PencilLine} from  'phosphor-react'

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1599837565318-67429bde7162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
                />

            <div className={styles.profile}>
               <img className={styles.avatar}
                src="https://github.com/Miguel-ectil.png"/>
                <strong>Miguel Ectil</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                 <PencilLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    );
}
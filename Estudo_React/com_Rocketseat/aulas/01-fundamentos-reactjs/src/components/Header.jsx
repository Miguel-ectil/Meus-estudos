import styles from './Header.module.css'

import ignitLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
      <header className={styles.header}>
        <img src={ignitLogo} alt='Logotipo do Ignite'/>  
      </header> 
    );
}
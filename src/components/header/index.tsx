import trybeLogo from '../../assets/images/logo-trybe.svg';
import styles from './header.module.css';

function Header() {
  return (
    <header className={ styles.header }>
      <img src={ trybeLogo } alt="Logo da Trybe" />
      <div>
        <h1>TRYBE NEWS</h1>
      </div>
    </header>
  )
}

export default Header;

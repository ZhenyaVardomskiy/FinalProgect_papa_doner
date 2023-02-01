import styles from './styles.module.scss'
import img from 'assets/images/Footer/logo-footer.svg'

function Header() {
     return (
          <footer >
               <div className={styles.wrapper}>
                    <div className={styles.socialMedia}>
                        <img src={img} alt="logoIcon" />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
          </footer>
     )
}

export default Header

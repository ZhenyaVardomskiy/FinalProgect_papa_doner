import img2 from 'assets/images/Footer/google-play.png'
import img3 from 'assets/images/Footer/app-store.png'

import styles from './styles.module.scss'

function MobileApplications() {
     return (
          <div className={styles.mobileStore}>
               <span>
                    <img src={img2} alt="googlePlay" />
                    <img src={img3} alt="AppStore" />
               </span>
          </div>
     )
}

export default MobileApplications

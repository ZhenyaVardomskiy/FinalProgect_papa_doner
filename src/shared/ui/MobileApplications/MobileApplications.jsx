import img2 from 'assets/images/Footer/google-play.png'
import img3 from 'assets/images/Footer/app-store.png'

import styles from './styles.module.scss'

function MobileApplications() {
     return (
          <div className={styles.mobileStore}>
               <span>
                    <a href="https://play.google.com/store/apps/details?id=com.foodpicasso.papadoner&hl=en_US"><img src={img2} alt="googlePlay" /></a>
                    <a href="https://apps.apple.com/by/app/papa-d%C3%B6ner-%D0%BC%D0%B8%D0%BD%D1%81%D0%BA/id1467714573"><img src={img3} alt="AppStore" /></a>
               </span>
          </div>
     )
}

export default MobileApplications

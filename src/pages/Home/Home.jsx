import { observer } from 'mobx-react-lite'

import { Menu } from 'pages/Menu'
import { AddressList, MobileApp, Videos } from 'shared/ui'

import styles from './styles.module.scss'

function Home() {
     return (
          <div className={styles.wrapper}>
               <Menu />
               <div>
                    <div className={styles.title}>ВИДЕО</div>
                    <div className={styles.videoBlock}>
                         <Videos />
                    </div>
               </div>
               <div id='address'>
                    <div className={styles.title}>НАШИ ЗАВЕДЕНИЯ</div>
                    <AddressList />
               </div>
               <div id='mobile'>
                    <MobileApp />
               </div>
          </div>
     )
}

export default observer(Home)

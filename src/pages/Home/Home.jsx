import { observer } from 'mobx-react-lite'

import { Menu } from 'pages/Menu'
import { Videos } from 'shared/ui'

import styles from './styles.module.scss'

function Home() {
     return (
          <div className={styles.wrapper}>
               <Menu />
               <div>
                    <div className={styles.videosTitle}>ВИДЕО</div>
                    <div className={styles.videoBlock}>
                         <Videos />
                    </div>
               </div>
          </div>
     )
}

export default observer(Home)

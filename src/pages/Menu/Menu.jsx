import { DonerItem } from './ui'

import styles from './styles.module.scss'

function Menu() {
     return (
          <div className={styles.wrapper}>
               <h1>МЕНЮ</h1>
               <DonerItem />
          </div>
     )
}

export default Menu

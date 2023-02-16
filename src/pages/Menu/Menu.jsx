import { DonerItem } from './ui'

import styles from './styles.module.scss'
import { DonerModal } from './model'
import { useEffect } from 'react'

function Menu() {
     useEffect(() => {
          DonerModal.fetch()
     }, [])

     return (
          <div className={styles.wrapper}>
               <h1>Донеры</h1>
               <div className={styles.doners}>
                    {DonerModal.doner.map((item) => {
                         return <DonerItem item={item} />
                    })}
               </div>
          </div>
     )
}

export default Menu

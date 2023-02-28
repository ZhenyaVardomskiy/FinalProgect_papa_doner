import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'

import { ProductsModel } from './model'
import { DonerItem } from './ui'

import styles from './styles.module.scss'

function Menu() {
     useEffect(() => {
          ProductsModel.fetch()
     }, [])

     return (
          <div className={styles.wrapper}>
               <div className={styles.titleWrapper}>
                    <div className={styles.title}>ДОНЕРЫ</div>
               </div>
               <div className={styles.doners}>
                    {ProductsModel.loading ? (
                         <>Loading....</>
                    ) : (
                         ProductsModel.doners.map((item) => {
                              item.count = 1
                              return <DonerItem item={item} key={item.title} />
                         })
                    )}
               </div>
          </div>
     )
}

export default observer(Menu)

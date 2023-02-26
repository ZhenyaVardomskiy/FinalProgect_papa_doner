import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { ProductsModel } from './model'
import { DonerItem } from './ui'

import styles from './styles.module.scss'
import { UserModel } from 'models'

function Menu() {
     useEffect(() => {
          ProductsModel.fetch()
     }, [])

     return (
          <div className={styles.wrapper}>
               <h1>Донеры</h1>
               {UserModel.count}
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

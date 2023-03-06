import { observer } from 'mobx-react-lite'

import styles from './styles.module.scss'

function ReviewsItems({ item }) {
     return (
          <div className={styles.wrapper}>
               <div className={styles.title}>
                    <div>{item.name}</div>
                    <div>{item.date}</div>
               </div>
               <div className={styles.description}>{item.description}</div>
          </div>
     )
}

export default observer(ReviewsItems)

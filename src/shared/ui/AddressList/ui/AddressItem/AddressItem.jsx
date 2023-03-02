import { observer } from 'mobx-react-lite'

import styles from './styles.module.scss'

function AddressItem({ item }) {
     return (
          <div className={styles.itemWrapper}>
               <img src={item.img} alt="" />
               <div className={styles.info}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <p>{item.time}</p>
               </div>
          </div>
     )
}

export default observer(AddressItem)

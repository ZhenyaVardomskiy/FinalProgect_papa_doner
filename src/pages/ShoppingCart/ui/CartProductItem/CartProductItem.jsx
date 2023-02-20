import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'
import styles from './styles.module.scss'

function CartProductItem({ title, description, price, size, img, img2 }) {
     
     return (
          <div className={styles.wrapper}>
               <div className={styles.mainImg}>
                    <img src={img} alt="" />
                    <div className={styles.titleImg}>
                         <img src={img2} alt="" />
                    </div>
               </div>
               <div className={styles.info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.text}>{description}</div>
                    <div className={styles.modification}>
                         <div className={styles.aboutBox}>
                              <div className={styles.price}>{price} руб</div>
                              <div className={styles.size}>{size}</div>
                         </div>
                         <div className={styles.count}>
                              <button className={styles.countBtn} onClick={()=>UserModel.removeItemOrder(title)}>-</button>
                              <div className={styles.countDisplay}>0</div>
                              <button className={styles.countBtn}>+</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default observer(CartProductItem)

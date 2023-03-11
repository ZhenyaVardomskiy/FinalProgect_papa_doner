import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'
import { BsTrash } from 'react-icons/bs'
import { HiMinus, HiPlus } from 'react-icons/hi'

import styles from './styles.module.scss'

function CartProductItem({
     id,
     title,
     description,
     price,
     size,
     img,
     img2,
     count,
     item,
}) {
     return (
          <div className={styles.wrapper} key={id}>
               <div className={styles.mainImg}>
                    <img src={img} alt=""/>
                    <div className={styles.titleImg}>
                         <img src={img2} alt="" />
                    </div>
               </div>
               <div className={styles.info}>
                    <div>
                         <div className={styles.title}>{title}</div>
                         <div className={styles.text}>{description}</div>
                    </div>
                    <div className={styles.modification}>
                         <div className={styles.aboutBox}>
                              <div className={styles.price}>
                                   {parseInt(price * count * 100) / 100} руб
                              </div>
                              <div className={styles.size}>{size}</div>
                         </div>
                         <div className={styles.count}>
                              <button
                                   className={`${styles.countBtn} ${styles.btnMinus}`}
                                   onClick={() => UserModel.downCount(item)}
                              >
                                   <HiMinus />
                              </button>
                              <div className={styles.countDisplay}>{count}</div>
                              <button
                                   
                                   className={`${styles.countBtn} ${styles.btnPlus}`}
                                   onClick={() => UserModel.upCount(item)}
                              >
                                   <HiPlus />
                              </button>
                              <div className={styles.trashBtnWrap}>
                                   <BsTrash
                                        className={styles.trashBtn}
                                        onClick={() =>
                                             UserModel.removeItemOrder(title)
                                        }
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default observer(CartProductItem)

import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'

import styles from './styles.module.scss'

function DonerItem({ item }) {
     const handleAddCart = (item) => {
          UserModel.addToOrder(item)
     }

     return (
          <div className={styles.doner}>
               <div className={styles.mainImg1}>
                    <img src={item.img} alt="" />
                    <div className={styles.titleImg}>
                         <img src={item.img2} alt="" />
                         <div className={styles.infoPriceWrap}>
                              <div className={styles.infoPriceSize}>
                                   {item.size}
                              </div>
                              <div className={styles.infoPrice}>
                                   {item.price} руб
                              </div>
                         </div>
                    </div>
               </div>
               <div className={styles.info}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.text}>{item.description}</div>
                    <div className={styles.sizeWrapper}>
                         <div className={styles.sizeBorder}>
                              <div className={styles.size}>{item.size}</div>
                         </div>
                    </div>
                    <div className={styles.total}>
                         <div className={styles.price}>
                              {item.cash}
                              <sup>{item.pennies}</sup>
                              <span>{item.currency}</span>
                         </div>
                         <button
                              className={styles.btn}
                              onClick={() =>
                                   handleAddCart({
                                        id: item.id,
                                        title: item.title,
                                        description: item.description,
                                        price: item.price,
                                        size: item.size,
                                        img: item.img,
                                        img2: item.img2,
                                        count: item.count,
                                   })
                              }
                         >
                              В корзину
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default observer(DonerItem)

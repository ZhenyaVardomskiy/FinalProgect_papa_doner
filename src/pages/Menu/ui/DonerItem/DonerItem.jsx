import styles from './styles.module.scss'

function DonerItem({ item }) {
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
                                   {item.price}
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
                         <button className={styles.btn}>В корзину</button>
                    </div>
               </div>
          </div>
     )
}

export default DonerItem

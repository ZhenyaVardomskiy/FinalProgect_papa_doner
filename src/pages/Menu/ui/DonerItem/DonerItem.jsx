import styles from './styles.module.scss'

import mainImg1 from 'assets/images/Doner/doner-mehiko-22x.webp'
import titleImg1 from 'assets/images/Doner/doner-mehiko-1.png'

function DonerItem() {
     return (
          <div className={styles.doner}>
               <div className={styles.mainImg1}>
                    <img src={mainImg1} alt="" />
                    <div className={styles.titleImg}>
                         <img src={titleImg1} alt="" />
                         <div className={styles.infoPriceWrap}>
                              <div className={styles.infoPriceSize}>500г</div>
                              <div className={styles.infoPrice}>9.50руб</div>
                         </div>
                    </div>
               </div>
               <div className={styles.info}>
                    <div className={styles.title}>Донер Мехико</div>
                    <div className={styles.text}>
                         Лепешка, Курица, Помидор, Маринованный огурец,
                         Пекинская капуста, Сыр, Грибы, Лук, Перец сладкий, Чили
                         соус, Чесночный соус
                    </div>
                    <div className={styles.sizeWrapper}>
                         <div className={styles.sizeBorder}>
                              <div className={styles.size}>500 г.</div>
                         </div>
                    </div>
                    <div className={styles.total}>
                         <div className={styles.price}>
                              9.
                              <sup>50</sup>
                              <span>руб</span>
                         </div>
                         <button className={styles.btn}>В корзину</button>
                    </div>
               </div>
          </div>
     )
}

export default DonerItem

import img1 from 'assets/images/Mobile/mibole-app1.png'
import img2 from 'assets/images/Mobile/mibole-app2.png'
import img3 from 'assets/images/Mobile/mibole-app3.png'
import img4 from 'assets/images/Mobile/mibole-app4.png'
import { MobileApplications } from '../MobileApplications'

import styles from './styles.module.scss'

function MobileApp() {

     return (
          <div className={styles.wrapper}>
               <h1 className={styles.title}>НАШЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h1>
               <div className={styles.items}>
                    <div className={styles.item}>
                         <img src={img1} alt="" />
                         <div className={styles.itemInfo}>
                              <h2>1</h2>
                              <h3>Выбери донер из меню</h3>
                              <p>
                                   Первыми узнавайте об акциях и скидках на
                                   любимые блюда
                              </p>
                         </div>
                    </div>
                    <div className={styles.item}>
                         <img src={img2} alt="" />
                         <div className={styles.itemInfo}>
                              <h2>2</h2>
                              <h3>Добавь ингредиенты по вкусу</h3>
                              <p>Будь в курсе новинок меню</p>
                         </div>
                    </div>
                    <div className={styles.item}>
                         <img src={img3} alt="" />
                         <div className={styles.itemInfo}>
                              <h2>3</h2>
                              <h3>Оформи доставку</h3>
                              <p>
                                   Мы помним что вы любите и всегда рады вкусно
                                   накормить
                              </p>
                         </div>
                    </div>
                    <div className={styles.item}>
                         <img src={img4} alt="" />
                         <div className={styles.itemInfo}>
                              <h2>4</h2>
                              <h3>Выбери удобный для тебя способ оплаты</h3>
                              <p>
                                   Оплата картой, наличными или онлайн + бонусы
                                   за каждый заказ
                              </p>
                         </div>
                    </div>
               </div>
               <MobileApplications />
          </div>
     )
}

export default MobileApp

import { UserModel } from 'models'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'

import { CartProductItem } from './ui/CartProductItem'
import img from 'assets/images/Footer/logo.svg'

import styles from './styles.module.scss'

function ShoppingCart() {
     return (
          <div className={styles.wrapper}>
                    {!UserModel.shoppingCart.length ? (
                         <div  className={styles.withoutItems}>
                              <Link to={ROUTES.HOME}>
                                   <img src={img} alt="" />
                              </Link>
                              <div className={styles.text}>
                                   Упс, в корзине пусто!
                              </div>
                              <div className={styles.description}>
                                   Не паникуйте, просто откройте меню и добавьте
                                   то, что вам нравится!
                              </div>
                              <Link to={ROUTES.HOME} className={styles.btn}>
                                   Вернуться в меню
                              </Link>
                         </div>
                    ) : (
                         <div  className={styles.withItems}>
                              <div  className={styles.titleWrapper}>
                                   <div className={styles.title}>КОРЗИНА</div>
                              </div>
                              {toJS(UserModel.shoppingCart).map((item) => (
                                   <CartProductItem
                                        item={item}
                                        key={item.id}
                                        title={item.title}
                                        price={item.price}
                                        size={item.size}
                                        img={item.img}
                                        img2={item.img2}
                                        count={item.count}
                                        description={item.description}
                                   />
                              ))}
                         </div>
                    )}
          </div>
     )
}

export default observer(ShoppingCart)

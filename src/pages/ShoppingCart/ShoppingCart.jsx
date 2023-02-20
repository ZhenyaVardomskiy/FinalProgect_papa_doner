import { UserModel } from 'models'
import { CartProductItem } from './ui/CartProductItem'

import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'

function ShoppingCart() {
     return (
          <div className={styles.wrapper}>
               <h1>КОРЗИНА</h1>
               <div className={styles.item}>
                    {!UserModel.shoppingCart.length ? (
                         <>Корзина пуста</>
                    ) : (
                         JSON.parse(JSON.stringify(UserModel.shoppingCart)).map(
                              (item) => (
                                   <CartProductItem
                                        key={item.title}
                                        title={item.title}
                                        price={item.price}
                                        size={item.size}
                                        img={item.img}
                                        img2={item.img2}
                                        description={item.description}
                                   />
                              )
                         )
                    )}
               </div>
          </div>
     )
}

export default observer(ShoppingCart)

import { UserModel } from 'models'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { CartProductItem } from './ui/CartProductItem'

import styles from './styles.module.scss'

function ShoppingCart() {
     // const upCountC = (item) => {
     //      UserModel.upCount(item)
     // }
     // const upCountC = ((item)=> {
     //      UserModel.upCount(item)
     // })

     return (
          <div className={styles.wrapper}>
               <h1>КОРЗИНА</h1>
               <div className={styles.item}>
                    {!UserModel.shoppingCart.length ? (
                         <>Корзина пуста</>
                    ) : (
                         toJS(UserModel.shoppingCart).map((item) => (
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
                         ))
                    )}
               </div>
          </div>
     )
}

export default observer(ShoppingCart)

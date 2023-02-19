import { UserModel } from 'models'
import { CartProductItem } from './ui/CartProductItem'

function ShoppingCart() {
     // function getItemInModel() {
     //      JSON.parse(JSON.stringify(UserModel.shoppingCart)).map((item) => {
     //           return item,
     //           console.log(item)
     //      })
     // }

     return (
          <div>
               КОРЗИНА
               <div>
                    {JSON.parse(JSON.stringify(UserModel.shoppingCart)).map(
                         (item) => (
                              <CartProductItem
                                   key={item.title}
                                   title={item.title}
                                   description={item.description}
                                   price={item.price}
                              />
                         )
                    )}
               </div>
          </div>
     )
}

export default ShoppingCart

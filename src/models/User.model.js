import { makeAutoObservable } from 'mobx'

const STORAGE_USER = 'user'

class UserModel {
     // console.log(JSON.parse(JSON.stringify(item))

     shoppingCart = []

     name = ''

     lastName = ''

     email = ''

     password = ''

     confirmPassword = ''

     constructor() {
          makeAutoObservable(this)

          this.init()
     }

     addToOrder(item) {
          if (item.title == item.title) {
               this.shoppingCart = [...this.shoppingCart, item]
               console.log(JSON.parse(JSON.stringify(this.shoppingCart)))
          }
     }

     removeItemOrder(title){
          this.shoppingCart = this.shoppingCart.filter((item) => item.title !== title)
          console.log('delete', title)
          console.log(JSON.parse(JSON.stringify(this.shoppingCart)))
          console.log(JSON.parse(JSON.stringify(this.shoppingCart.length)))
     }

     signIn({ email, password }) {
          this.email = email
          this.password = password
     }

     signUp(values) {
          this.fromJSON(values)

          localStorage.setItem(STORAGE_USER, JSON.stringify(values))
     }

     init() {
          if (localStorage.getItem(STORAGE_USER)) {
               const values = JSON.parse(localStorage.getItem(STORAGE_USER))

               this.fromJSON(values)
          }
     }

     fromJSON({ name, lastName, email, password, confirmPassword }) {
          this.name = name
          this.lastName = lastName
          this.email = email
          this.password = password
          this.confirmPassword = confirmPassword
     }

     isLoggedIn() {
          return Boolean(this.email)
     }

     changeInfo({ email, password }) {
          if (this.email !== email) {
               this.email = email
          }
          if (this.password !== password) {
               this.password = password
          }
     }

     logOut() {
          this.email = ''
          this.password = ''

          localStorage.removeItem(STORAGE_USER)
     }



//      {if (JSON.parse(JSON.stringify(UserModel.shoppingCart.length)) != 0) {
//           {JSON.parse(JSON.stringify(UserModel.shoppingCart)).map(
//               (item) => (
//                    <CartProductItem
//                         key={item.title}
//                         title={item.title}
//                         price={item.price}
//                         size={item.size}
//                         img={item.img}
//                         img2={item.img2}
//                         description={item.description}
//                    />
//               )
//          )}
//     } else {
//          <div>пусто</div>
//     }}
}

export default new UserModel()

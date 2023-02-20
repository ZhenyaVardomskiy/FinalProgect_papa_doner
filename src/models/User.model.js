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
               console.log(this.shoppingCart)
          }
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
}

export default new UserModel()

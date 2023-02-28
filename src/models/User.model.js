import { makeAutoObservable, toJS } from 'mobx'

const STORAGE_USER = 'user'

class UserModel {
     // console.log(JSON.parse(JSON.stringify(item)) //заглянуть внутрь proxy
     //console.log(toJS(this.shoppingCart)) //заглянуть внутрь proxy(лучший метод)

     shoppingCart = []

     count = 0

     name = ''

     lastName = ''

     email = ''

     password = ''

     confirmPassword = ''

     // total = 0

     constructor() {
          makeAutoObservable(this)

          this.init()
     }

     addToOrder(item) {
          const idData = item.id
          const idx = this.shoppingCart.findIndex((item) => item.id === idData)
          if (idx !== -1) {
               this.shoppingCart[idx].count = this.shoppingCart[idx].count + 1
          } else {
               this.shoppingCart.push(item)
          }
          console.log(toJS(this.shoppingCart), 'add')
     }

     upCount(item) {
          const idData = item.id
          const idx = this.shoppingCart.findIndex((item) => item.id === idData)
          if (idx !== -1 && this.shoppingCart[idx].count >= 1) {
               this.shoppingCart[idx].count = this.shoppingCart[idx].count + 1
          } else {
               this.shoppingCart[idx].count = 1
          }
          console.log(toJS(this.shoppingCart), '+')
     }

     downCount(item) {
          const idData = item.id
          const idx = this.shoppingCart.findIndex((item) => item.id === idData)
          if (idx !== -1 && this.shoppingCart[idx].count > 1) {
               this.shoppingCart[idx].count = this.shoppingCart[idx].count - 1
          } else {
               this.shoppingCart[idx].count = 1
          }
          console.log(toJS(this.shoppingCart), '-')
     }

     removeItemOrder(title) {
          this.shoppingCart = this.shoppingCart.filter(
               (item) => item.title !== title
          )
          console.log('delete', title)
          console.log(toJS(this.shoppingCart))
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

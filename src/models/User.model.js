import { makeAutoObservable } from 'mobx'

const STORAGE_USER = 'user'

class UserModel {
     name = ''

     lastName = ''

     email = ''

     password = ''

     confirmPassword = ''

     constructor() {
          makeAutoObservable(this)

          this.init()
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

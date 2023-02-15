import { makeAutoObservable } from 'mobx'

class UserModel {
     name = ''

     lastName = ''

     email = ''

     password = ''

     confirmPassword = ''

     constructor() {
          makeAutoObservable(this)
     }

     signUp({ name, lastName, email, password, confirmPassword }) {
          this.name = name
          this.lastName = lastName
          this.email = email
          this.password = password
          this.confirmPassword = confirmPassword
     }

     signIn({ email, password }) {
          this.email = email
          this.password = password
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
          this.name = ''
          this.email = ''
          this.password = ''
          this.lastName = ''
          this.password = ''
          this.confirmPassword = ''
     }
}

export default new UserModel()

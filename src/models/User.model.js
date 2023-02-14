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
}

export default new UserModel()

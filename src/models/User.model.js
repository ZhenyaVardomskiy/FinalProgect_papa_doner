import { makeAutoObservable, toJS } from 'mobx'

// import mainImg1 from 'assets/images/Doner/doner-mehiko-22x.webp'
// import mainImg2 from 'assets/images/Doner/doner-vegetarian-22x.webp'
// import mainImg3 from 'assets/images/Doner/doner-italjyano-22x.webp'
// import mainImg4 from 'assets/images/Doner/doner-derevnya-22x.webp'
// import titleImg1 from 'assets/images/Doner/doner-mehiko-1.png'
// import titleImg2 from 'assets/images/Doner/doner-vegetarian-1.png'
// import titleImg3 from 'assets/images/Doner/doner-italjyano-1.png'
// import titleImg4 from 'assets/images/Doner/doner-derevnya-1.png'

const STORAGE_USER = 'user'

class UserModel {
     // console.log(JSON.parse(JSON.stringify(item)) //заглянуть внутрь proxy
     //console.log(toJS(this.shoppingCart)) //заглянуть внутрь proxy(лучший метод)

     shoppingCart = [
          // {
          //      id: 1,
          //      title: 'Донер Мехико',
          //      size: '500 г.',
          //      price: '9.50',
          //      cash: '9.',
          //      pennies: '50',
          //      currency: 'руб',
          //      img: mainImg1,
          //      img2: titleImg1,
          //      description:
          //           'Лепешка, Курица, Помидор, Маринованный огурец, Пекинская капуста, Сыр, Грибы, Лук, Перец сладкий, Чили соус, Чесночный соус',
          // },
          // {
          //      id: 2,
          //      title: 'Донер Вегетариан',
          //      size: '450 г.',
          //      price: '6.90',
          //      cash: '6.',
          //      pennies: '90',
          //      currency: 'руб',
          //      img: mainImg2,
          //      img2: titleImg2,
          //      description:
          //           'Лепешка, Помидор, Свежий огурец, Пекинская капуста, Сыр, Грибы, Чесночный соус',
          // },
          // {
          //      id: 3,
          //      title: 'Донер Итальяно',
          //      size: '500 г.',
          //      price: '9.50',
          //      cash: '9.',
          //      pennies: '50',
          //      currency: 'руб',
          //      img: mainImg3,
          //      img2: titleImg3,
          //      description:
          //           'Лепешка, Курица, Помидор, Маринованный огурец, Пекинская капуста, Сыр, Грибы, Лук, Маслины, Чесночный соус',
          // },
          // {
          //      id: 4,
          //      title: 'Донер Деревня',
          //      size: '500 г.',
          //      price: '8.50',
          //      cash: '8.',
          //      pennies: '50',
          //      currency: 'руб',
          //      img: mainImg4,
          //      img2: titleImg4,
          //      description:
          //           'Лепешка, Курица, Капуста, Помидор, Маринованный огурец, Грибы, Картофель по-деревенски, Лук свежий, Сметанный соус,Чесночный соус',
          // },
     ]

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

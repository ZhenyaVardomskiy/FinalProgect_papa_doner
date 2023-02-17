import { makeAutoObservable } from 'mobx'

import mainImg1 from 'assets/images/Doner/doner-mehiko-22x.webp'
import mainImg2 from 'assets/images/Doner/doner-vegetarian-22x.webp'
import mainImg3 from 'assets/images/Doner/doner-italjyano-22x.webp'
import mainImg4 from 'assets/images/Doner/doner-derevnya-22x.webp'
import titleImg1 from 'assets/images/Doner/doner-mehiko-1.png'
import titleImg2 from 'assets/images/Doner/doner-vegetarian-1.png'
import titleImg3 from 'assets/images/Doner/doner-italjyano-1.png'
import titleImg4 from 'assets/images/Doner/doner-derevnya-1.png'

class ProductsModel {
     doners = []

     loading = false

     constructor() {
          makeAutoObservable(this)
     }

     fetch() {
          this.loading = true
          setTimeout(() => {
               this.doners = [
                    {
                         title: 'Донер Мехико',
                         size: '500 г.',
                         price: '9.50 руб',
                         cash: '9.',
                         pennies: '50',
                         currency: 'руб',
                         img: mainImg1,
                         img2: titleImg1,
                         description:
                              'Лепешка, Курица, Помидор, Маринованный огурец, Пекинская капуста, Сыр, Грибы, Лук, Перец сладкий, Чили соус, Чесночный соус',
                    },
                    {
                         title: 'Донер Вегетариан',
                         size: '450 г.',
                         price: '6.90 руб',
                         cash: '6.',
                         pennies: '90',
                         currency: 'руб',
                         img: mainImg2,
                         img2: titleImg2,
                         description:
                              'Лепешка, Помидор, Свежий огурец, Пекинская капуста, Сыр, Грибы, Чесночный соус',
                    },
                    {
                         title: 'Донер Итальяно',
                         size: '500 г.',
                         price: '9.50 руб',
                         cash: '9.',
                         pennies: '50',
                         currency: 'руб',
                         img: mainImg3,
                         img2: titleImg3,
                         description:
                              'Лепешка, Курица, Помидор, Маринованный огурец, Пекинская капуста, Сыр, Грибы, Лук, Маслины, Чесночный соус',
                    },
                    {
                         title: 'Донер Деревня',
                         size: '500 г.',
                         price: '8.50 руб',
                         cash: '8.',
                         pennies: '50',
                         currency: 'руб',
                         img: mainImg4,
                         img2: titleImg4,
                         description:
                              'Лепешка, Курица, Капуста, Помидор, Маринованный огурец, Грибы, Картофель по-деревенски, Лук свежий, Сметанный соус,Чесночный соус',
                    },
               ]

               this.loading = false
          }, 500)
     }
}

export default new ProductsModel()
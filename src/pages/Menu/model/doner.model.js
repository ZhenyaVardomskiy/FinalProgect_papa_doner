import { height } from '@mui/system'
import { makeAutoObservable } from 'mobx'

import mainImg1 from 'assets/images/Doner/doner-mehiko-22x.webp'
import titleImg1 from 'assets/images/Doner/doner-mehiko-1.png'
// import imgNews1 from "assets/img/News/image1.jpg";
// import imgNews2 from "assets/img/News/image2.jpg";
// import imgNews3 from "assets/img/News/image3.png";
// import imgNews4 from "assets/img/News/image4.jpg";

class DonerModel {
     doner = []

     constructor() {
          makeAutoObservable(this)
     }

     fetch() {
          setTimeout(() => {
               this.doner = [
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
               ]
          }, 2000)
     }
}

export default new DonerModel()

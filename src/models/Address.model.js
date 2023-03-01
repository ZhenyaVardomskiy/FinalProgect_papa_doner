import { makeAutoObservable, toJS } from 'mobx'

import img1 from 'assets/images/Address/KG.jpg'
import img2 from 'assets/images/Address/YR.jpg'
import img3 from 'assets/images/Address/KN.jpg'
import img4 from 'assets/images/Address/AV.jpg'
import img5 from 'assets/images/Address/IK.jpg'
import img6 from 'assets/images/Address/YK.jpeg'
import img7 from 'assets/images/Address/DM.jpg'
import img8 from 'assets/images/Address/PR.jpeg'

class AddressModel {
     address = []

     loading = false

     constructor() {
          makeAutoObservable(this)
     }

     fetch() {
           this.loading = true
          setTimeout(() => {
               this.address = [
                    {
                         id: 1,
                         title: 'г. Минск, ст.м. Каменная горка',
                         time: 'Время работы: 9:00–23:00',
                         img: img1,
                         description:
                              'Подземный переход, выход в сторону гипермаркета Green',
                    },
                    {
                         id: 2,
                         title: 'г. Минск, ст.м. Уручье',
                         time: 'Время работы: 9:00–23:00',
                         img: img2,
                         description:
                              'Подземный переход, выход в сторону McDonalds',
                    },
                    {
                         id: 3,
                         title: 'г. Минск, ст.м. Кунцевщина',
                         time: 'Время работы: 9:00–23:00',
                         img: img3,
                         description: 'Подземный переход',
                    },
                    {
                         id: 4,
                         title: 'г. Минск, ст.м. Автозаводская',
                         time: 'Время работы: 9:00–23:00',
                         img: img4,
                         description: 'Подземный переход',
                    },
                    {
                         id: 5,
                         title: 'г. Минск, ст.м. Институт культуры',
                         time: 'Время работы: 9:00–23:00',
                         img: img5,
                         description: 'Улица Могилевская 12.а',
                    },
                    {
                         id: 6,
                         title: 'г. Минск, ст. м. Якуба Коласа',
                         time: 'Время работы: 10:00–22:30',
                         img: img6,
                         description: 'Улица Веры Хоружей 25 к1',
                    },
                    {
                         id: 7,
                         title: 'г. Минск, ТЦ Dana mall',
                         time: 'Время работы: 10:00–22:00',
                         img: img7,
                         description: 'ст.м. Восток, ул. Петра Мстиславца 9',
                    },
                    {
                         id: 8,
                         title: 'г. Минск, ст.м. Партизанская',
                         time: 'Время работы: 9:00–23:00',
                         img: img8,
                         description: 'Подземный переход',
                    },
               ]

                 this.loading = false
          }, 500)
     }
}

export default new AddressModel()

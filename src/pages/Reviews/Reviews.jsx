import { observer } from 'mobx-react-lite'
import { ReviewsModel } from 'models'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'

import styles from './styles.module.scss'
import { ReviewsItems } from './ui'

function Reviews() {
     useEffect(() => {
          ReviewsModel.fetch()
     }, [])

     return (
          <div className={styles.wrapper}>
               <div className={styles.path}>
                    <Link to={ROUTES.HOME}>Главная</Link>
                    <span>/</span>
                    <p>Отзывы</p>
               </div>
               <h1>Отзывы наших клиентов</h1>
               <div>
                    {ReviewsModel.reviews.map((item) => {
                         return <ReviewsItems item={item} key={item.id} />
                    })}
               </div>
          </div>
     )
}

export default observer(Reviews)

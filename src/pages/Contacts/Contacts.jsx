import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { AddressItem } from './ui'
import { AddressModel } from 'models'

import styles from './styles.module.scss'
import img from 'assets/images/Footer/logo.svg'
import { MobileApplications } from 'shared/ui'

function Contacts() {
     useEffect(() => {
          AddressModel.fetch()
     }, [])

     return (
          <div className={styles.wrapper}>
               <div className={styles.path}>
                    <Link to={ROUTES.HOME}>Главная</Link>
                    <span>/</span>
                    <p>Контакты</p>
               </div>
               <div className={styles.contacts}>
                    <h1>Контакты</h1>
                    <div className={styles.contactsCategory}>
                         <div className={styles.contactsBlock}>
                              <h4>Мы в соцсетях</h4>
                              <div className={styles.socials}>
                                   <p>
                                        <span>
                                             <IoLogoYoutube />
                                        </span>
                                        Youtube
                                   </p>
                                   <p>
                                        <span>
                                             <IoLogoInstagram />
                                        </span>
                                        Instagram
                                   </p>
                              </div>
                         </div>
                         <div className={styles.contactsBlock}>
                              <h4>Написать нам</h4>
                              <div>
                                   <a href="service@papadoner.by">
                                        service@papadoner.by
                                   </a>
                              </div>
                         </div>
                         <div className={styles.contactsBlock}>
                              <h4>Телефон поддержки</h4>
                              <p>7927</p>
                         </div>
                         <div className={styles.contactsBlock}>
                              <h4>Приложение</h4>
                              <MobileApplications />
                         </div>
                    </div>
                    <div className={styles.addressListWrapper}>
                         <h1>Адреса и график работы</h1>
                         <div className={styles.addressList}>
                              {AddressModel.loading ? (
                                   <>Loading....</>
                              ) : (
                                   AddressModel.address.map((item) => {
                                        return (
                                             <AddressItem
                                                  item={item}
                                                  key={item.title}
                                             />
                                        )
                                   })
                              )}
                         </div>
                    </div>
                    <div className={styles.support}>
                         <h3>Есть вопрос? Напишите нам!</h3>
                         <div className={styles.content}>
                              <div className={styles.questionForm}>
                                   <input
                                        type="text"
                                        placeholder="Ваше сообщение"
                                        className={styles.questionInput}
                                   />
                                   <input
                                        type="text"
                                        placeholder="Укажите ваше имя"
                                        className={styles.questionInput}
                                   />
                                   <input
                                        type="text"
                                        placeholder="Ваш e-mail для обратной связи"
                                        className={styles.questionInput}
                                   />
                                   <button className={styles.questionBtn}>
                                        Отправить сообщение
                                   </button>
                              </div>
                              <img src={img} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default observer(Contacts)

import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { FaTiktok } from 'react-icons/fa'
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { HiOutlinePhone } from 'react-icons/hi'

import img from '../../assets/images/Footer/logo.svg'
import img4 from '../../assets/images/Footer/mastter-card.png'
import img5 from '../../assets/images/Footer/visa.png'

import styles from './styles.module.scss'
import { MobileApplications } from 'shared/ui'

function Footer() {
     return (
          <footer className={styles.footer}>
               <div className={styles.wrapper}>
                    <div className={styles.socialMedia}>
                         <Link to={ROUTES.HOME}>
                              <img src={img} alt="img" />
                         </Link>
                         <div className={styles.socialIcon}>
                              <IoLogoInstagram />
                              <IoLogoYoutube />
                              <FaTiktok />
                         </div>
                    </div>
                    <div className={styles.item}>
                         <p>Меню</p>
                         <ul className={styles.listWrapper}>
                              <li>Шаурма</li>
                              <li>Стики</li>
                              <li>Боксы</li>
                              <li>Хантеры</li>
                              <li>Супы</li>
                              <li>Картошка</li>
                              <li>Напитки</li>
                         </ul>
                    </div>
                    <div className={styles.item}>
                         <p>Papa Doner</p>
                         <ul className={styles.listWrapper}>
                              <li>Главная</li>
                              <li>Приложение</li>
                              <li>О компании</li>
                              <li>Адреса заведений</li>
                              <li>Франшиза</li>
                              <li>Контакты</li>
                              <li>Отзывы</li>
                         </ul>
                    </div>
                    <div className={styles.item}>
                         <p>Адреса наших заведений</p>
                         <ul className={styles.listWrapper}>
                              <li>г. Минск, ст.м. Каменная горка</li>
                              <li>г. Минск, ст.м. Уручье</li>
                              <li>г. Минск, ст.м. Кунцевщина</li>
                              <li>г. Минск, ст.м. Автозаводская</li>
                              <li>г. Минск, ст.м. Институт культуры</li>
                              <li>г. Минск, Веры Хоружей 25 к1</li>
                              <li>г. Минск, ТЦ Dana mall</li>
                              <li>г. Минск, ст.м. Партизанская</li>
                         </ul>
                    </div>
                    <div className={styles.item}>
                         <p>Служба поддержки</p>
                         <div className={styles.callCenter}>
                              <HiOutlinePhone />
                              <span>7927</span>
                         </div>
                         <div className={styles.callCenterTime}>
                              Время работы колл-центра: <br /> пн-вс с 8:00 до
                              24:00
                         </div>
                         <p>Для мобильных устройств</p>
                         <MobileApplications />
                         <div>
                              <p>Написать нам</p>
                              <a href="/">service.papadoner@yandex.ru</a>
                         </div>
                    </div>
               </div>
               <div className={styles.card}>
                    <img src={img4} alt="mastterCard" />
                    <img src={img5} alt="visa" />
               </div>
          </footer>
     )
}

export default Footer

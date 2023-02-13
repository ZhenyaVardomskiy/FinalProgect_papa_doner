import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { FaTiktok } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlinePhone, HiOutlineShoppingCart } from 'react-icons/hi'
import { GoTriangleDown } from 'react-icons/go'

import styles from './styles.module.scss'

import logo from '../../assets/images/Header/logo.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { SignInModal, SignUpModal } from './ui'

function Header() {

     return (
          <header className={styles.wrapper}>
               <div className={styles.upNav}>
                    <Link to={ROUTES.HOME}>
                         <img src={logo} alt="logo" className={styles.logo} />
                    </Link>
                    <div className={styles.phone}>
                         <HiOutlinePhone className={styles.phoneIcon} />
                         <div className={styles.phoneText}>7927</div>
                    </div>
                    <div className={styles.socialMedia}>
                         <IoLogoInstagram />
                         <IoLogoYoutube />
                         <FaTiktok />
                    </div>
                    <div className={styles.deliveryPin}>
                         <span>
                              <FiMapPin />
                         </span>
                         г.Минск, ст.м. Каменная горка
                         <span>
                              <GoTriangleDown />
                         </span>
                    </div>
                    <SignInModal />
                    <SignUpModal />
               </div>
               <div className={styles.downNav}>
                    <div className={styles.mainMenu}>
                         <div className={styles.menuItem}>
                              <a href="">Меню</a>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Приложение</a>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Заведения</a>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Отзывы</a>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Новости</a>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.ABOUT}>О компании</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.CONTACTS}>Контакты</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Франшиза</a>
                         </div>
                    </div>
                    <button className={styles.cartBtn}>
                         <HiOutlineShoppingCart className={styles.cartIcon} />
                         Корзина: 0.00 руб.
                    </button>
               </div>
          </header>
     )
}

export default Header

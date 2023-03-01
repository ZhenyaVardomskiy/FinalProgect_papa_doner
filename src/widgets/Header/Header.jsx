import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { FaTiktok, FaUserCircle } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlinePhone, HiOutlineShoppingCart } from 'react-icons/hi'
import { GoTriangleDown } from 'react-icons/go'

import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { UserModel } from 'models'
import { SignInModal, SignUpModal } from './ui'

import logo from '../../assets/images/Header/logo.svg'
import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'

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
                    {UserModel.isLoggedIn() ? (
                         <Link to={ROUTES.USER} className={styles.user}>
                              <FaUserCircle />
                              <div>{UserModel.email}</div>
                         </Link>
                    ) : (
                         <>
                              <SignInModal />
                              <SignUpModal />
                         </>
                    )}
               </div>
               <div className={styles.downNav}>
                    <div className={styles.mainMenu}>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.MENU}>Меню</Link>
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
                              <Link to={ROUTES.ABOUT}>О компании</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.CONTACTS}>Контакты</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="">Франшиза</a>
                         </div>
                    </div>

                    <Link to={ROUTES.SHOPPING_CART} className={styles.cartBtn}>
                         <HiOutlineShoppingCart className={styles.cartIcon} />
                         Корзина: {UserModel.total} руб.
                    </Link>
               </div>
          </header>
     )
}

export default observer(Header)

import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { FaTiktok, FaUserCircle } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlinePhone, HiOutlineShoppingCart } from 'react-icons/hi'
import { GoTriangleDown } from 'react-icons/go'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { UserModel } from 'models'
import { SignInModal, SignUpModal } from './ui'

import logo from '../../assets/images/Header/logo.svg'
import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

function Header() {
     const [nav, setNav] = useState(false)

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
                              <span>
                                   <FaUserCircle />
                                   <div>{UserModel.email}</div>
                              </span>
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
                              <a href="/#mobile">Приложение</a>
                         </div>
                         <div className={styles.menuItem}>
                              <a href="/#address">Заведения</a>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.REVIEWS}>Отзывы</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.ABOUT}>О компании</Link>
                         </div>
                         <div className={styles.menuItem}>
                              <Link to={ROUTES.CONTACTS}>Контакты</Link>
                         </div>
                    </div>

                    <Link to={ROUTES.SHOPPING_CART} className={styles.cartBtn}>
                         <span>
                              {' '}
                              <HiOutlineShoppingCart
                                   className={styles.cartIcon}
                              />{' '}
                              Корзина: {UserModel.total} руб.
                         </span>
                    </Link>
               </div>
               <div className={styles.container}>
                    <div className={styles.logoMobile}>
                         <Link to={ROUTES.HOME}>
                              <img
                                   src={logo}
                                   alt="logo"
                                   className={styles.logo}
                              />
                         </Link>
                         <div className={styles.phone}>
                              <HiOutlinePhone className={styles.phoneIcon} />
                              <div className={styles.phoneText}>7927</div>
                         </div>
                         <Link
                              to={ROUTES.SHOPPING_CART}
                              className={styles.cartBtn}
                         >
                              <span>
                                   {' '}
                                   <HiOutlineShoppingCart
                                        className={styles.cartIcon}
                                   />{' '}
                                   {UserModel.total} руб.
                              </span>
                         </Link>
                    </div>
                    <div className={styles.box}>
                         <ul
                              className={
                                   nav
                                        ? [styles.menu, styles.active].join(' ')
                                        : [styles.menu]
                              }
                         >
                              {UserModel.isLoggedIn() ? (
                                   <Link
                                        onClick={() => setNav(!nav)}
                                        to={ROUTES.USER}
                                        className={styles.user}
                                   >
                                        <span>
                                             <FaUserCircle />
                                             <div>{UserModel.email}</div>
                                        </span>
                                   </Link>
                              ) : (
                                   <>
                                        <SignInModal />
                                        <SignUpModal />
                                   </>
                              )}
                              <li onClick={() => setNav(!nav)} className={styles.categoryList}>
                                   <Link to={ROUTES.MENU}>Меню</Link>
                              </li>
                              <li onClick={() => setNav(!nav)}  className={styles.categoryList}>
                                   <a href="/#mobile">Приложение</a>
                              </li>
                              <li onClick={() => setNav(!nav)}  className={styles.categoryList}>
                                   <a href="/#address">Заведения</a>
                              </li>
                              <li onClick={() => setNav(!nav)}  className={styles.categoryList}>
                                   <Link to={ROUTES.REVIEWS}>Отзывы</Link>
                              </li>
                              <li onClick={() => setNav(!nav)}  className={styles.categoryList}>
                                   <Link to={ROUTES.ABOUT}>О компании</Link>
                              </li>
                              <li onClick={() => setNav(!nav)}  className={styles.categoryList}>
                                   <Link to={ROUTES.CONTACTS}>Контакты</Link>
                              </li>
                         </ul>
                         <div
                              onClick={() => setNav(!nav)}
                              className={styles.mobile_btn}
                         >
                              {nav ? (
                                   <AiOutlineClose size={25} />
                              ) : (
                                   <AiOutlineMenu size={25} />
                              )}
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default observer(Header)

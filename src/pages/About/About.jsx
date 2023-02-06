import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/const'

import styles from './styles.module.scss'

import img1 from 'assets/images/About/about-1.png'
import img2 from 'assets/images/About/about-2.png'
import img3 from 'assets/images/About/about-3.png'

function About() {
     return (
          <div className={styles.wrapper}>
               <div className={styles.path}>
                    <Link to={ROUTES.HOME}>Главная</Link>
                    <span>/</span>
                    <p>О компании</p>
               </div>
               <div className={styles.aboutCompany}>
                    <h1>О компании</h1>
                    <p>
                         За несколько лет компания превратилась в одну из
                         знаменитых сетей уличной еды в Минске, выпустила
                         множество реклам и засветилась в сьемках знаменитых
                         людей.
                    </p>
                    <p>
                         Впервые Папа Донер открылся в 2018 году, подземный
                         переход метро Каменная Горка. Компания решила
                         продолжить свое развитие по сети метро открыв менее чем
                         через год кафе на станции метро Уручье, а затем и на
                         станциях Кунцевщина и Автозаводская, а теперь еще и
                         кафе открытое на ул. Могилевская 12а.
                    </p>
                    <p>
                         Нашей задачей и целью стоит обеспечивать высочайшее
                         качество продукции в сети кафе Папа Донер.
                    </p>
                    <p>
                         Мы используем только продукцию лучших местных
                         поставщиков, которая ежедневно поставляется в наши
                         кафе!
                    </p>
                    <p>
                         Наши донеры – это продукт, которым мы гордимся! Папа
                         Донер уделяет огромное внимание отбору поставщиков и
                         соответствию их всем стандартам пищевой безопасности!
                    </p>
                    <div className={styles.mediaBlock}>
                         <img src={img1} alt="about" />
                         <ul>
                              <li>
                                   <h4>Большой выбор донеров</h4>
                                   <p>Донер найдется для каждого</p>
                              </li>
                              <li>
                                   <h4>Контроль качества</h4>
                                   <p>
                                        Мы проверяем качество нашей продукции на
                                        каждом этапе
                                   </p>
                              </li>
                              <li>
                                   <h4>Возможность добавить ингредиенты</h4>
                                   <p>
                                        Собирай донер на свой вкус.
                                        Зарегистрируйся на сайте и заказывай
                                        любимые сочетания из истории заказов в
                                        личном кабинете
                                   </p>
                              </li>
                         </ul>
                    </div>
                    <div
                         className={`${styles.mediaBlock} ${styles.mediaBlockReverse}`}
                    >
                         <img src={img2} alt="about" />
                         <ul>
                              <li>
                                   <h4>Никакого майонеза</h4>
                                   <p>В наших донерах нет никакого майонеза</p>
                              </li>
                              <li>
                                   <h4>Бонусы при заказе в приложении</h4>
                                   <p>
                                        Заказывай через приложение Papa Doner и
                                        получай бонусы за каждый заказ
                                   </p>
                              </li>
                              <li>
                                   <h4>Удобное расположение ресторанов</h4>
                                   <p>
                                        Наши рестораны расположены рядом с
                                        популярными станциями метро: просто
                                        проверь карту наших заведений и
                                        отправляйся за вкусным донером от Papa
                                        Doner
                                   </p>
                              </li>
                         </ul>
                    </div>
                    <div className={styles.mediaBlock}>
                         <img src={img3} alt="about" />
                         <ul>
                              <li>
                                   <h4>Доставка</h4>
                                   <p>
                                        Теперь донер приедет прямо к тебе домой
                                   </p>
                              </li>
                              <li>
                                   <h4>Кэшбэк</h4>
                                   <p>
                                        Зарегистрируйся на сайте и получай
                                        кэшбэк 3% за каждый заказ
                                   </p>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className={styles.videoBlock}>
                    <h1>Наши рекламные ролики</h1>
                    <div className={styles.videos}>
                         <div className={styles.slide}>
                              <video
                                   src="https://franch.papadoner.by/video1.mp4"
                                   preload="metadata"
                                   controls="contrtols"
                              ></video>
                         </div>
                         <div className={styles.slide}>
                              <video
                                   src="https://franch.papadoner.by/video2.mp4"
                                   preload="metadata"
                                   controls="contrtols"
                              ></video>
                         </div>
                         <div className={styles.slide}>
                              <video
                                   src="https://franch.papadoner.by/video3.mp4"
                                   preload="metadata"
                                   controls="contrtols"
                              ></video>
                         </div>
                         <div className={styles.slide}>
                              <video
                                   src="https://papadoner.by/resource/video/2021/08/ak.mp4"
                                   preload="metadata"
                                   controls="contrtols"
                              ></video>
                         </div>
                    </div>
               </div>
               <div className={styles.franchise}>
                    <div>
                         <h2>Франшиза донерной в Беларуси</h2>
                         <p>
                              Узнайте, как открыть точку по продаже донеров под
                              брендом Papa Döner в вашем городе Беларуси
                         </p>
                    </div>
                    <div className={styles.feedback}>
                         <input type="text" placeholder="Ваше имя" />
                         <input type="text" placeholder="email" />
                         <input type="text" placeholder="телефон" />
                         <button>Узнать подробности</button>
                    </div>
               </div>
          </div>
     )
}

export default About

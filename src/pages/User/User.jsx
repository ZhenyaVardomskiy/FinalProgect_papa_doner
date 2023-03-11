import { Box} from '@mui/material'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { FormInput } from 'shared/const/ui/FormInput'
import { emailValidation, passwordValidation } from 'shared/helpers'
import * as Yup from 'yup'

import styles from './styles.module.scss'

const SignInSchema = Yup.object().shape({
     email: emailValidation(),
     password: passwordValidation(),
})

function User() {
     const navigate = useNavigate()     

     return (
          <div className={styles.wrapper}>
               <div className={styles.titleWrapper}>
                    <div className={styles.title}>Профиль</div>
                    <div
                         className={styles.logOut}
                         onClick={() => {
                              UserModel.logOut()
                              navigate(ROUTES.HOME)
                         }}
                    >
                         Выйти
                    </div>
               </div>
               <Box
                    sx={{
                         maxWidth: 600,
                    }}
               >
                    <Formik
                         initialValues={{
                              name: UserModel.name,
                              lastName: UserModel.lastName,
                              email: UserModel.email,
                              password: '',
                              confirmPassword: '',
                         }}
                         validationSchema={SignInSchema}
                         onSubmit={(values) => {
                              UserModel.changeInfo(values)
                         }}
                    >
                         {({ handleSubmit }) => (
                              <form
                                   onSubmit={handleSubmit}
                                   style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                   }}
                              >
                                   <div className={styles.changeInfoBlock}>
                                        <div className={styles.subtitle}>
                                             Личные данные
                                        </div>
                                        <FormInput name="name" label="Имя" />
                                        <FormInput
                                             name="lastName"
                                             label="Фамилия"
                                        />
                                        <FormInput name="email" />
                                   </div>
                                   <div className={styles.changeInfoBlock}>
                                        <div className={styles.subtitle}>
                                             Изменение пароля
                                        </div>
                                        <FormInput
                                             name="password"
                                             label="Новый пароль"
                                        />
                                        <FormInput
                                             name="confirmPassword"
                                             label="Повторите пароль"
                                        />
                                        <button
                                             className={styles.btn}
                                             type="submit"
                                             
                                        >
                                             Сохранить
                                        </button>
                                        
                                   </div>
                              </form>
                         )}
                    </Formik>
               </Box>
          </div>
     )
}

export default observer(User)

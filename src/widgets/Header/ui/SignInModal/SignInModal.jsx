import { useState } from 'react'
import { Formik } from 'formik'
import { Box, Modal } from '@mui/material'
import { FaUser } from 'react-icons/fa'
import * as Yup from 'yup'

import styles from './styles.module.scss'
import { FormInput } from 'shared/const/ui/FormInput'

const SignInSchema = Yup.object().shape({
     email: Yup.string().email('Неверный адрес').required('Обязательное поле'),
     password: Yup.string()
          .min(2, 'Слишком короткий!')
          .max(50, 'Слишком длинный!')
          .required('Обязательное поле'),
})

function SignInModal() {
     const [open, setOpen] = useState(false)

     function handleOpen() {
          setOpen(true)
     }

     function handleClose() {
          setOpen(false)
     }

     return (
          <div>
               <div className={styles.enter} onClick={handleOpen}>
                    <FaUser />
                    Войти
               </div>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box
                         sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              minWidth: 350,
                              bgcolor: 'background.paper',
                              boxShadow: 24,
                              borderRadius: 6,
                              p: 4,
                         }}
                    >
                         <Formik
                              initialValues={{ email: '', password: '' }}
                              validationSchema={SignInSchema}
                              onSubmit={(values) => {
                                   console.log(values)
                              }}
                         >
                              {({ handleSubmit }) => (
                                   <form
                                        onSubmit={handleSubmit}
                                        style={{
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: '12px',
                                        }}
                                   >
                                        <div className={styles.title}>
                                             Войти в аккаунт Papa Doner
                                        </div>
                                        <FormInput name="email" />
                                        <FormInput name="password" label="Пароль"/>
                                        <button
                                             type="submit"
                                             className={styles.modalBtn}
                                        >
                                             Войти
                                        </button>
                                   </form>
                              )}
                         </Formik>
                    </Box>
               </Modal>
          </div>
     )
}

export default SignInModal

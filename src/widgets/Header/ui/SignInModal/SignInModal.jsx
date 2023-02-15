import { useState } from 'react'
import { Formik } from 'formik'
import { Box, Modal } from '@mui/material'
import { GrClose } from 'react-icons/gr'
import { FaUser } from 'react-icons/fa'
import * as Yup from 'yup'

import styles from './styles.module.scss'
import { FormInput } from 'shared/const/ui/FormInput'
import { UserModel } from 'models'
import { emailValidation, passwordValidation } from 'shared/helpers'

const SignInSchema = Yup.object().shape({
     email: emailValidation(),
     password: passwordValidation()
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
                              p: 3,
                         }}
                    >
                         <Formik
                              initialValues={{ email: '', password: '' }}
                              validationSchema={SignInSchema}
                              onSubmit={(values) => {
                                   UserModel.signIn(values)
                              }}
                         >
                              {({ handleSubmit }) => (
                                   <form
                                        onSubmit={handleSubmit}
                                        style={{
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: '5px',
                                        }}
                                   >
                                        <div className={styles.closeBtnWrapper}>
                                             <GrClose
                                                  onClick={handleClose}
                                                  className={styles.closeBtn}
                                             />
                                        </div>
                                        <div className={styles.title}>
                                             Войти в аккаунт Papa Doner
                                        </div>
                                        <FormInput name="email" />
                                        <FormInput
                                             name="password"
                                             label="Пароль"
                                        />
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

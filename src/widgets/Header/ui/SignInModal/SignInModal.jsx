import { useState } from 'react'
import { Formik } from 'formik'
import { Box, Modal, TextField } from '@mui/material'
import { FaUser } from 'react-icons/fa'
import * as Yup from 'yup'

import styles from './styles.module.scss'

const SignInSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Required'),
     password: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
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
                              {({
                                   values,
                                   errors,
                                   touched,
                                   handleChange,
                                   handleBlur,
                                   handleSubmit,
                              }) => (
                                   <form
                                        onSubmit={handleSubmit}
                                        style={{
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: '12px',
                                        }}
                                   >
                                        <TextField
                                             type="email"
                                             name="email"
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.email}
                                             label="email"
                                             variant="standard"
                                        />
                                        {errors.email &&
                                             touched.email &&
                                             errors.email}
                                        <TextField
                                             type="password"
                                             name="password"
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                             value={values.password}
                                             label="password"
                                             variant="standard"
                                        />
                                        {errors.password &&
                                             touched.password &&
                                             errors.password}
                                        <button
                                             type="submit"
                                             className={styles.modalBtn}
                                        >
                                             Submit
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

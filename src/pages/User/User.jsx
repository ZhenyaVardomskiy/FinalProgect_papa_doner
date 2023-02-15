import { Box, Button } from '@mui/material'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import { UserModel } from 'models'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/const'
import { FormInput } from 'shared/const/ui/FormInput'
import { emailValidation, passwordValidation } from 'shared/helpers'
import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
    email: emailValidation(),
    password: passwordValidation()
})

function User() {
     const navigate = useNavigate()

     return (
          <Box
               sx={{
                    maxWidth: 400,
                    borderRadius: 6,
                    p: 4,
               }}
          >
               <Formik
                    initialValues={{
                         email: UserModel.email,
                         password: UserModel.password,
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
                                   gap: '12px',
                              }}
                         >
                              <FormInput name="email" />
                              <FormInput name="password" />
                              <Button type="submit" variant="contained">
                                   Submit
                              </Button>
                         </form>
                    )}
               </Formik>
               <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                         UserModel.logOut()
                         navigate(ROUTES.HOME)
                    }}
               >
                    Log out
               </Button>
          </Box>
     )
}

export default observer(User)

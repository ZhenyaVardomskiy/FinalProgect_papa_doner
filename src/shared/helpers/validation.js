import * as Yup from 'yup'

export const emailValidation = () => {
     return Yup.string().email('Неверный адрес').required('Обязательное поле')
}

export const passwordValidation = () => {
     return Yup.string()
          .min(2, 'Слишком короткий!')
          .max(50, 'Слишком длинный!')
          .required('Обязательное поле')
}

export const confirmPasswordValidation = () => {
     return Yup.string().oneOf(
          [Yup.ref('password')],
          'Пароли не совпадают'
     )
}

export const nameValidation = () => {
     return Yup.string()
     .min(2, 'Слишком короткий!')
     .max(50, 'Слишком длинный!')
     .required('Обязательное поле')
}

export const lastNameValidation = () => {
     return Yup.string()
     .min(2, 'Слишком короткий!')
     .max(50, 'Слишком длинный!')
     .required('Обязательное поле')
}
import { TextField } from '@mui/material'
import { useFormikContext } from 'formik'

function FormInput({ name, label }) {
     const { handleChange, handleBlur, values, errors, touched } =
          useFormikContext()

     return (
          <div
               style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
               }}
          >
               <TextField
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                    label={label || name}
                    variant="standard"
               />
               <div style={{ color: 'red', marginTop: '10px' }}>
                    {errors[name] && touched[name] && errors[name]}
               </div>
          </div>
     )
}

export default FormInput

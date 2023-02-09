import { useState } from 'react'
import { Box, Modal, TextField } from '@mui/material'
import { FaUserPlus } from 'react-icons/fa'

import styles from './styles.module.scss'

function SignUpModal() {
     const [open, setOpen] = useState(false)
     const handleOpen = () => setOpen(true)
     const handleClose = () => setOpen(false)

     return (
          <div>
               <div className={styles.register} onClick={handleOpen}>
                    <FaUserPlus className={styles.registerIcon} />
                    Зарегистрироваться
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
                              width: 400,
                              bgcolor: 'background.paper',
                              border: 'none',
                              boxShadow: 24,
                              borderRadius: 6,
                              p: 4,
                         }}
                    >
                         <TextField
                              id="email"
                              label="Standard"
                              variant="standard"
                         />
                         <TextField
                              id="password"
                              label="Standard"
                              variant="standard"
                         />
                    </Box>
               </Modal>
          </div>
     )
}

export default SignUpModal

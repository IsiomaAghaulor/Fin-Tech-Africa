

import React,{useState} from 'react'
import {Modal, Typography, Box, Button} from '@material-ui/core';




const ModalTest = () => {

    const [open, setOpen] = useState(true)

    const handleOpen = ()=>{
        setOpen(true)
          }
          const handleClose = ()=>{
            setOpen(false)
          }
  return (
    <>
 
 <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={"2"}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.knkjznbc,

      jsakhdkjf,nskjdfnkjlhsbkjhdbfkjdshfkjsdbfkskjfbdgjkgj.fbkds

      s;dklfksjdfnbkjbfsdkjbfkjsbfdkjbskdjf,bkkjsbdfkjbsjkdfsjbfdkjsbfdkjbsfkjbskfdjskjdf
      skfnskbfdkjbsfkjd
      sdnfkmbjk
    </Typography>
  </Box>
</Modal>
  </>
  )
}

export default ModalTest
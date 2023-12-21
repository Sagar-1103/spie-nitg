"use client"
import * as React from 'react';
import { FormEvent, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 2. get reference to the input element
    const input = ref.current!;

    // 3. build form data
    const formData = new FormData();
    for (const file of Array.from(input.files ?? [])) {
      formData.append(file.name,file);
    }
    // 4. use axios to send the FormData
     await axios.post("/api/uploadCommitiesImages", formData);
    // const filename = await axios.post("/api/uploadCommitiesImages", formData);
    // console.log(filename);
    
    // let fileNameWithoutExtension = fileName.split('.')[0];
    // const filename = fileNameWithoutExtension;
    // const bio = {
    //   "name":"Sagar",
    //   "post":"member"
    //   "filename":filename
    // }
    // {"name":"Sagar","post":"member"}
    // await axios.post("api/postdata",bio);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
      Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Post.
          </Typography>
          <form onSubmit={handleSubmit}>
        <input className='my-1' type="text" name="name" required placeholder='Member Name'/>
        <input className='my-1' type="text" name="post" required placeholder='Post'/>
        <input className='my-1' type="file" name="files" ref={ref} multiple required/>
        <button
          type="submit"
          className="px-2 py-1 rounded-md bg-violet-50 text-violet-500"
        >
          Upload
        </button>
      </form>
        </Box>
      </Modal>
    </div>
  );
}
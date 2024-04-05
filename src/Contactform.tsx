import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contactform.css'
// Import other social media icons as needed

// Add your profile URLs here
const linkedInUrl = 'https://www.linkedin.com/in/yourprofile';
const githubUrl = 'https://github.com/yourprofile';

type ContactFormProps = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#000',
};

const SubmitButton = styled(Button)({
  marginTop: '16px',
  backgroundColor: 'rgba(25, 118, 210, 0.7)',
  '&:hover': {
    backgroundColor: 'rgba(25, 118, 210, 1)',
  },
});

const ContactForm: React.FC<ContactFormProps> = ({ open, handleClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  

  useEffect(() => {
    emailjs.init("kpECnAmkx2tV-vXRQ");
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.length < 10) {
      setMessage('The message needs to be at least 10 characters long.');
      return; // Stop the form submission if the validation fails
    }
    setSending(true);

    try {
      const result = await emailjs.send("service_dw1bhei","template_f6x20fo",{
        name,
        email,
        message,
        });
      console.log(result.text);
      setMessage('Email successfully sent!');
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to send the email. Please try again.');
    } finally {
      setSending(false);
      handleClose(); // Close the modal after attempting to send the email
    }
  };

  return (
    <div className='contact'>
    <Modal
        keepMounted
        open={open}
        onClose={handleClose}>

      <Box sx={style} component="form" ref={formRef} onSubmit={sendEmail} noValidate autoComplete="off">
      <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={2}>
          Contact Me
        </Typography>
        <TextField
          label="Name"
          type="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          variant="outlined"
          margin="dense"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          variant="outlined"
          margin="dense"
        />
        <TextField
          label="Description"
          name="message"
          multiline
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          required
          variant="outlined"
          margin="dense"
        />
        <SubmitButton type="submit" disabled={sending} variant="contained" fullWidth>
          Send
        </SubmitButton>
        {message && (
          <Typography color="secondary" marginTop={2}>
            {message}
          </Typography>
        )}


      </Box>
    </Modal>   

      </div>
  );
};

export default ContactForm;

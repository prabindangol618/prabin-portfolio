
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasName = name.trim() !== '';
    const hasEmail = email.trim() !== '';
    const hasMessage = message.trim() !== '';

    setNameError(!hasName);
    setEmailError(!hasEmail);
    setMessageError(!hasMessage);
    setStatus('');

    if (!hasName || !hasEmail || !hasMessage) {
      return;
    }

    setLoading(true);

    const templateParams = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      await emailjs.send(
        'service_jq68fkq',
        'template_pke4lk3',
        templateParams,
        '79LSaeWlaNpejj1Qm'
      );

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />

              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
            />

            {status === 'success' && (
              <Alert severity="success">
                Your message has been sent successfully!
              </Alert>
            )}

            {status === 'error' && (
              <Alert severity="error">
                Something went wrong. Please try again later.
              </Alert>
            )}

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const form = useRef<any>();

  const nameField = useRef<any>();
  const emailField = useRef<any>();
  const msgField = useRef<any>();
  const sendBtn = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_z1ky5mk', 'template_ohuv1v8', form.current, 'q8_22JSjvE6OE0Eda')
      .then((result: any) => {
          console.log(result.text);
          sendBtn.current.value = "Sent!";
          nameField.current.value = "";
          emailField.current.value = "";
          msgField.current.value = "";
      }, (error: any) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input ref={nameField} id="name-inp" type="text" name="user_name" />
      <label>Email</label>
      <input ref={emailField} id="email-inp" type="email" name="user_email" />
      <label>Message</label>
      <textarea ref={msgField} id="message-inp" name="message" />
      <input ref={sendBtn} id="send-message-btn" type="submit" value="Send"/>
    </form>
  );
};
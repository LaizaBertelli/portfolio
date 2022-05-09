import React from 'react';
import SendBtn from '../Components/SendBtn';

function Contact() {
  return (
    <div className="contact_main">
      <h1 className="contact_me_title">Fale comigo</h1>
      <label htmlFor="name_input">
        Nome
        <input className="name_input" name="name_input" type="text" />
      </label>
      <label htmlFor="email_input">
        Email
        <input className="email_input" name="email_input" type="email" />
      </label>
      <label htmlFor="message_input">
        Menssagem
        <textarea className="message_input" name="message_input" />
      </label>

      <SendBtn />
    </div>
  );
}

export default Contact;

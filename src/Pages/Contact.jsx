import React, { useContext } from 'react';
import '../Styles/Pages/Contact.css';
import Modal from 'react-modal';
import SendBtn from '../Components/SendBtn';
import ContactContext from '../Context/ContactContext';

Modal.setAppElement('#root');

function Contact() {
  const { isModalOpen, setIsModalOpen } = useContext(ContactContext);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      className="contact_modal"
    >
      <div className="contact_main">
        <section className="contact_image" />
        <section className="contact_forms">
          <h1 className="contact_me_title">Fale comigo</h1>
          <label htmlFor="name_input">
            Nome
            <input
              className="name_input"
              name="name_input"
              type="text"
            />
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
        </section>
      </div>
    </Modal>
  );
}

export default Contact;

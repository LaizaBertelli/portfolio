import React, { useContext } from 'react';
import '../Styles/Components/ContactBtn.css';
import ContactContext from '../Context/ContactContext';

function ContactBtn() {
  const {
    setIsModalOpen,
  } = useContext(ContactContext);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <button type="button" className="contact_button" onClick={handleOpenModal}>
      CONTATE-ME
    </button>
  );
}

export default ContactBtn;

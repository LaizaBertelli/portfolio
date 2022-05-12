/* eslint-disable react/jsx-no-constructed-context-values */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../Context/ContactContext';

function ContactProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const context = {
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <ContactContext.Provider value={context}>
      { children }
    </ContactContext.Provider>
  );
}

ContactProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ContactProvider;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import css from './ContactForm.module.scss';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    if (number === '') {
      alert('Please enter number');
      return;
    }
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };
  return (
    <>
      <form className={css.form} onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={css.form__input}
          // pattern="^[a\-zA\-Zа\-яА-Я]+((['\-][a\-zA\-Zа\-яА\-Я ])?[a\-zA\-Zа\-яА\-Я]*)*$"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <label htmlFor="name" className={css.form__label}>
          Name:
        </label>

        <input
          type="tel"
          name="number"
          placeholder="Number"
          className={css.form__input}
          id="email"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // pattern="^\+?\d{1,4}[#\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}$"
          value={number}
          onChange={handleChange}
        />
        <label htmlFor="email" className={css.form__label}>
          Number
        </label>

        <button type="submit" className={css.button_56}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

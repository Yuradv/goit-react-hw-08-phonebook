import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useState } from 'react';
import Notiflix from 'notiflix';
// import shortid from 'shortid';
import s from './Form.module.css';

export default function Form() {
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  // const saveContact = (name, phone) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     Notiflix.Notify.failure(`${name} is already in contacts`);
  //   } else {
  //     addContact(name,phone);
  //     Notiflix.Notify.success(`${name} has been added to contacts!`);
  //   }
  // };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      addContact(contact);
      Notiflix.Notify.success(`${name} has been added to contacts!`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();
 

  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            <p style={{ fontWeight: '700', width: '200px' }}>{contact.name}:</p>
            <p style={{ width: '200px' }}>{contact.phone}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;

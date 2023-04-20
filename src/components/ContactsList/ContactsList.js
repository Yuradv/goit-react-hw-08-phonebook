// import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { deleteContact } from 'redux/contacts/contactsApi';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './Contacts.module.css';

function ContactsList({ contacts }) {
  // const [deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={s.item}>
              <p style={{ fontWeight: '700', width: '200px' }}>
                {contact.name}:
              </p>
              <p style={{ width: '200px' }}>{contact.number}</p>
              <button
                className={s.button}
                type="button"
                onClick={() =>
                  dispatch(
                    deleteContact(contact.id),
                    Notiflix.Notify.info(`${contact.name} has been deleted`)
                  )
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;

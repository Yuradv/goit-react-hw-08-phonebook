import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Container from 'components/Container';
import { fetchContacts } from 'redux/contacts/contactsApi';
import { PulseLoader } from 'react-spinners';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const getVisibleContacts = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Form />
      <hr />

      <Filter value={filter} />
      {isLoading && <PulseLoader color="#ed9121" size={30} />}
      {contacts.length === 0 && (
        <h2
          style={{
            marginTop: '50px',
            color: '#ed9121',
            textDecoration: 'underline',
          }}
        >
          There are no contacts
        </h2>
      )}
      <ContactsList contacts={getVisibleContacts()} />
    </Container>
  );
}
